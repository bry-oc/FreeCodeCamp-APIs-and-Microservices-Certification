var express = require('express');
var app = express();
var dotenv = require('dotenv').config();

console.log("Hello World");

//set static elements from public path with middleware
let relativePath = '/public';
let absolutePath = __dirname + relativePath;

console.log(absolutePath);

app.use(relativePath, express.static(absolutePath));

//create a logger for requests
app.use('/', function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
/*
//root path will send a response with string "Hello Express"
app.get('/',  function (req, res) {
    res.send('Hello Express');
});
*/

//root path will load index.html in views path with GET request
let file = '/index.html';
relativePath = '/views';
absolutePath = __dirname + relativePath + file;

console.log(absolutePath);

app.get('/', function(req, res) {
    res.sendFile(absolutePath);
});

//send a json response depending on the hidden .env variable with GET request
relativePath = '/json';
let message_text = "Hello json"
app.get(relativePath, function(req, res) {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({message: message_text.toUpperCase()}); 
    } else {
        res.json({message: message_text});
    }
});

//send the current time in a GET request at the '/now' path with a middleware function to set the time
relativePath = '/now';
app.get(relativePath, function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time: req.time});
});

//send an echo of the word in '/:word/echo' path with a GET request
relativePath = '/:word/echo'
app.get(relativePath, function(req, res){
    res.json({echo: req.params.word})
});


//send a user's name in a GET request according to POST request query params
relativePath = '/name'
app.route(relativePath).get(function(req, res){
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.json({name: firstname + " " + lastname});
});








































 module.exports = app;
