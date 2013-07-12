var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
//var array = fs.readFileSync('index.html').toString().split("\n");
var buffer = new buffer(20);
buffer.write(fs.readFileSync('index.html').toString(),"utf-8"));
//var buffer= new buffer(fs.readFileSync('index.html').toString(),"utf-8");


app.get('/', function(request, response) {
  response.send(buffer.toString());
//for (i in array) {
  //  response.send(array[i]);
//}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
