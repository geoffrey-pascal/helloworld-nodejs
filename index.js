const express = require('express');
const app = express();
const os = require('os');

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
