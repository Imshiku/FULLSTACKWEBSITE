import express from "express";
import bodyParser from "body-parser";
const app= express();
const port= 3000;
// const path = require('path');


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
res.render("login.ejs")
});
app.get("/home",(req,res)=>{
    res.render("login.ejs")
})
app.post("/submit",(req,res)=>{
    res.render("main.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.get("/button",(req,res)=>{
    res.render("main.ejs")
})
app.get("/service",(req,res)=>{
    res.render("service.ejs")
})
app.get("/contact",(req,res)=>{
    res.render("login.ejs")
});
app.get("/blogs",(req,res)=>{
    res.render("main.ejs")
})

// In your server file
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});

