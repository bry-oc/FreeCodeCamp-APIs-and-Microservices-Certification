var express = require('express');
var app = express();
console.log("Hello World");

/*
app.get('/',  function (req, res) {
    res.send('Hello Express');
});
*/

const absolutePath = __dirname + '/views/index.html'
app.get('/', function(req, res) {
  res.sendFile(absolutePath)
});




































 module.exports = app;