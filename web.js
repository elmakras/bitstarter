var express = require('express');
var fs = require('fs');


var buffer, content;
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./index.html'));
    content = buffer.toString();
    response.send(content);
});

app.get('/sample.html', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./sample.html'));
    content = buffer.toString();
    response.send(content);
});

app.get('/js/jquery.js', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./js/jquery.js'));
    content = buffer.toString();
    response.send(content);
});

app.get('/js/bootstrap.min.js', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./js/bootstrap.min.js'));
    content = buffer.toString();
    response.send(content);
});

app.get('/css/bootstrap.min.css', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./css/bootstrap.min.css'));
    content = buffer.toString();
    response.send(content);
});

app.get('/css/style.css', function(request, response) {
    console.log('Request is : ' + request.url);
    buffer = new Buffer(fs.readFileSync('./css/style.css'));
    content = buffer.toString();
    response.send(content);
});




var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
