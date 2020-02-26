//create express obj
const exp=require("express");
const app=exp();


//import path module
const path=require("path");

//connect with angular app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/Angular8AppB24'    )));

//import user and admin apps
const userApp=require("./APIS/userApi");
const adminApp=require("./APIS/adminApi");

//forward to specific api based on path
app.use("/user",userApp);
app.use("/admin",adminApp);


//assign port number
const port=3000;
app.listen(port,()=>{console.log(`server is running on ${port}`)})