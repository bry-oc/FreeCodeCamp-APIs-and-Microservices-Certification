var express = require('express');
var app = express();
console.log("Hello World");

let relativePath = '/public';
let absolutePath = __dirname + relativePath;

console.log(absolutePath);

app.use(relativePath, express.static(absolutePath));

/*
app.get('/',  function (req, res) {
    res.send('Hello Express');
});
*/

let file = '/index.html';
relativePath = '/views';
absolutePath = __dirname + relativePath + file;

console.log(absolutePath);

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});









































 module.exports = app;
