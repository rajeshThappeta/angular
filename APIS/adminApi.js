//create mini express app
const exp=require("express");
const adminExpressApp=exp.Router();


//write admin req handlers here
adminExpressApp.get("/test",(req,res)=>{
    res.send("admin test working");
})


//export adminExpressApp
module.exports=adminExpressApp;