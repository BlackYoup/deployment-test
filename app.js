var express = require('express');
const lodash = require("lodash");
console.log('loadsh:', lodash);
var app = express();

app.get('/', function(req, res){
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(req.headers));
//  res.send(`
//  <html>
//    <body>
//      <script>
//        var img = new Image();
//        img.crossOrigin = "";
//        img.onload = test;
//        img.src = "http://46.252.181.47:11083/blackyoup/hltv.png";
//
//        function test() {
//
//          var ctx = document.querySelector("canvas").getContext("2d");
//          ctx.drawImage(this, 0, 0);
//
//          // This will fail if no CORS support, otherwise all OK
//          try {
//            ctx.getImageData(0, 0, 10, 10);
//            alert("All OK");
//          }
//          catch(err) {
//            alert("No CORS support...");
//          }
//        }
//      </script>
//
//      Hello, second version ! ${process.env.INSTANCE_NUMBER}
//      <!--<img src="http://46.252.181.47:11083/blackyoup/hltv.png" />-->
//      <canvas></canvas>
//    </body>
//  </html>
//`);
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
  for(let i = 0; i<50; i++) {
    console.log(process.env.INSTANCE_NUMBER, new Date().toISOString(), "ROOM:", i);
  }
}, 1000);

app.listen(process.env.PORT);
console.log('hello updated2');
