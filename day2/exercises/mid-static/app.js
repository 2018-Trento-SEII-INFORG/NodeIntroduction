/*
* app.js
* Main entry point of the mid-static project
* This script shows how to create a server
* servig static files using app.use middleware feature
*/
var express = require('express');
var app = express();

var port = 3000;

app.use('/', express.static('public'));

// Handling GET requests
app.get('/hello', function(req, res){ 
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('Server running on port ', port);
});
