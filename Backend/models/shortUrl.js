const mongoose=require('mongoose')

const shortUrl=new mongoose.Schema({
    url: {type:String,required:true},
    validity: {type:integer,required:false,default:30},
    shortcode: {type:String,required:false}
});