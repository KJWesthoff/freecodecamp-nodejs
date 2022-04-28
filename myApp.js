var dotenv = require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path')
//console.log("Hello World");

//console.log(path.join(__dirname, "public"))

app.use("/public", express.static(path.join(__dirname, "public")));

app.use((req,res,next) => {
    var str = req.method + " " + req.path + " - " +req.ip
    console.log(str)
    next()
})    



app.get('/', (req,res) => {
    //res.send("Hello Express")
    res.sendFile(__dirname+"/views/index.html");
})


app.get('/json', (req,res) => {
    var resp = "Hello json"
    if(process.env.MESSAGE_STYLE == "uppercase"){
        var resp = "Hello json".toUpperCase()
    } else {
        var resp = "Hello json" 
    }

    res.json({message:resp});
})


app.get("/now", (req,res,next)=> {
    req.time = new Date().toString()
    next()
}, (req,res)=> {
    res.json({time:req.time})
})

app.get("/:word/echo", (req,res)=> {
    var param = req.params.word
    res.json({echo:param})
})


app.get("/name", (req,res) => {
    //http://localhost:3000/name?firstname=Johan&lastname=Doe
    var qparams = req.query
    console.log(qparams)
    res.json({ name: `${qparams.firstname} ${qparams.lastname}`})
})



















 module.exports = app;
