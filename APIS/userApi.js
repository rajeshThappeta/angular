//create mini express app
const exp=require("express");
const userExpressApp=exp.Router();

userExpressApp.use(exp.json());

//write user req handlers here
userExpressApp.post('/register',(req,res)=>{
    
    res.send({message:"user test working"})
})


//export this userExpressApp
module.exports=userExpressApp;
