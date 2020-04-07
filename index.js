const express = require('express');
const app = express();
const os = require('os');




console.log("mongodb://"+process.env['database-user']+":"+process.env['database-password']+"@"+process.env.MONGODB_SERVICE_HOST+":"+process.env.MONGODB_SERVICE_PORT+"/"+process.env['database-name']);

app.use(express.static('static/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  console.log("Serving new request")
  res.render(__dirname + "/static/template/index_ppc64le.html", {arch: os.arch(), hostname: os.hostname() });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
