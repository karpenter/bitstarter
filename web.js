var fs = require('fs');
var index = new Buffer(256);
index = fs.readFileSync("index.html");
var index_to_str = index.toString();
// console.log(index_to_str);



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(index_to_str);
    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
