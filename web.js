var express = require('express');
var fs = require('fs');
var index = fs.readFileSync("index.html");
var buf = new Buffer(256);
var out = (buf.toString(index));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
  response.send(index);
    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
