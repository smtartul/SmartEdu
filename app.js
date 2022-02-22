const express=require('express')
const mongoose=require('mongoose')
const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')


const app=express();

//connectdb mongo,
mongoose.connect('mongodb://localhost:27017/smartedu-db').then(()=>{
    console.log('Db connected succesfully!');
});
//Template engine definition for ejs
app.set("view engine","ejs")

//Middlewares definitions
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/',pageRoute)
app.use('/courses',courseRoute)

const port=5000;
app.listen(port,()=>{
    console.log(`App started on port: ${port}`);
})