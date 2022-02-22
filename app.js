const express=require('express')
const pageRoute=require('./routes/pageRoute')

const app=express();

//Template engine definition for ejs
app.set("view engine","ejs")

//Middlewares definitions
app.use(express.static("public"));

//routes
app.use('/',pageRoute)

const port=5000;
app.listen(port,()=>{
    console.log(`App started on port: ${port}`);
})