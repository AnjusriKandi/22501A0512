const express = require("express");
const app = express();
const port = 5000;
const Log = require("./loggingMiddleware");

app.use(express.json());

//Log Middleware
app.use((req, res, next) => {
  Log("backend", "info", "middleware", `Incoming ${req.method} to ${req.url}`);
  next();
});

//database
let db={};

//Creates Short URL
app.post("/shorturls", (req, res) => {
  let { url, validity, shortcode } = req.body;
  if (!url) {
    Log("backend", "error", "shorturls", "Missing URL in request body");
    return res.status(400).json({ error: "URL is required" });
  }

  if (validity === undefined) {
    validity = 30;
  }
  if (shortcode === undefined) {
    shortcode = generateShortCode(url);
  }
  const expiry = new Date();
  expiry.setDate(expiryDate.getDate() + validity);
  const shortLink = `http://localhost:${port}/${shortcode}`;
  Log("backend", "info", "shorturls", `Short URL created: ${shortLink}`);
  db.collection("shorturls").insertOne({
    url,
    shortcode,
    shortLink,
    expiry,
  });
  res.statusCode(201).send({ shortLink, expiry });
});

//Retrieve short URL statistics
app.get("/shorturls/:shortcode", (req, res) => {
    const shortcode = req.params.shortcode;
    const temp=db.findOne({shortcode});
    res.statusCode(200).send(temp);
});