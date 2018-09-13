/*
* server.js
* In this example we see how to create a simple server.
*/
var http = require('http');
var port = 3000;

var requestHandler = function(request, response) {
  console.log(request.url);
  response.end('Hello World!');
}

var server = http.createServer(requestHandler);
server.listen(port);
console.log("Server started, listening on port", port);
