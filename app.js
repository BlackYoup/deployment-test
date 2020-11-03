var express = require('express');
const lodash = require("lodash");
console.log('loadsh:', lodash);
var app = express();

app.get('/', function(req, res){
  res.send(`
  <html>
    <body>
      Hello, second version ! ${process.env.INSTANCE_NUMBER}
      <img src="http://blackyoup.cellar-c2.services.clever-cloud.com/hltv.png" />
    </body>
  </html>
`);
});

app.get('/timeout', function(req, res) {
  if (req.headers['sozu-id']) {
    console.log('Sozu request', new Date());
  }

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
