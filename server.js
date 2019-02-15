var express = require('express');
var app = express();

app.use(express.static(__dirname + "/views"));

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/skills', function(req, res) {
    res.sendFile(__dirname + "/views/skills.html");
})

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/views/contact.html");
})

app.listen(8000, function() {
    console.log("You are listening to port 8000...");
});

// route all attached HTML pages //