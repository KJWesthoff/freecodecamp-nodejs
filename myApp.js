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
    
    res.json({message:"Hello json"});
})


























 module.exports = app;
