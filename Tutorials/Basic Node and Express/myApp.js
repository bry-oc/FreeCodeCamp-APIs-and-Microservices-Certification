var express = require('express');
var app = express();
var dotenv = require('dotenv').config();

console.log("Hello World");

//set static elements from public path
let relativePath = '/public';
let absolutePath = __dirname + relativePath;

console.log(absolutePath);

app.use(relativePath, express.static(absolutePath));

/*
app.get('/',  function (req, res) {
    res.send('Hello Express');
});
*/

//root path will load index.html in views path
let file = '/index.html';
relativePath = '/views';
absolutePath = __dirname + relativePath + file;

console.log(absolutePath);

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
});

//send a json response depending the the hidden .env variable
relativePath = '/json';
let message_text = "Hello json"
app.get(relativePath, function(req, res) {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({message: message_text.toUpperCase()}); 
    } else {
        res.json({message: message_text});
    }
    
});











































 module.exports = app;
