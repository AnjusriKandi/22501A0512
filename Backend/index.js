const express = require('express');
const app = express();
const port=5000;

app.use(express.json());


//Creates Short URL
app.post('/shorturls',(req,res)=>{
    const {url,validity,shortcode}=req.body;
    if(validity===undefined){
        validity=30;
    }
    if(shortcode===undefined){
        shortcode = generateShortCode(url);
    }
    const expiry=new Date();
    expiry.setDate(expiryDate.getDate()+validity);
    const shortLink='http://localhost:port/'+shortcode;
    res.statusCode(201).send({shortLink,expiry});
});





    