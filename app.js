const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();

//connectdb mongo,
mongoose.connect("mongodb://localhost:27017/smartedu-db").then(() => {
  console.log("Db connected succesfully!");
});
//Template engine definition for ejs
app.set("view engine", "ejs");

//global variables
global.userIN=null;

//Middlewares definitions

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
  })
);

//routes
app.use('*',(req,res,next)=>{
  userIN=req.session.userID;
  next();
})
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`App started on port: ${port}`);
});
