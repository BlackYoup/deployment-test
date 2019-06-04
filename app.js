var express = require('express');
var app = express();

this is a syntax error

app.get('/', function(req, res){
  res.send(`Hello, second version ! ${process.env.INSTANCE_NUMBER}`);
});

setInterval(() => {
  console.log(process.env.INSTANCE_NUMBER, new Date().toISOString(), "ROOM");
}, 1000);

app.listen(process.env.PORT);
console.log('hello updated');