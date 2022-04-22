var dotenv = require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path')
console.log("Hello World");

console.log(path.join(__dirname, "public"))

app.use("/public", express.static(path.join(__dirname, "public")));

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


























 module.exports = app;
