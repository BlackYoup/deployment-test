var express = require('express');
const lodash = require("lodash");
console.log('loadsh:', lodash);
var app = express();

app.get('/', function(req, res){
  res.send(`Hello, second version ! ${process.env.INSTANCE_NUMBER}`);
});

app.get('/timeout', function(req, res) {
  setTimeout(() => {
    res.status(200);
    res.end();
  }, 10000);
})

setInterval(() => {
  console.log(process.env.INSTANCE_NUMBER, new Date().toISOString(), "ROOM");
}, 1000);

app.listen(process.env.PORT);
console.log('hello updated2');
