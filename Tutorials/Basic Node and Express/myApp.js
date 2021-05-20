var express = require('express');
var app = express();
console.log("Hello World");

/*
app.get('/',  function (req, res) {
    res.send('Hello Express');
});
*/
let relativePath = '/views';
let file = '/index.html';
let absolutePath = __dirname + relativePath + file;

app.get('/', function(req, res) {
  res.sendFile(absolutePath)
});




































 module.exports = app;
