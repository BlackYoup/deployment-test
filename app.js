var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello, second version !');
});

setInterval(() => {
  console.log(new Date().toISOString());
}, 1000);

app.listen(process.env.PORT);
