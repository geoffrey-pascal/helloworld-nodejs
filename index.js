const express = require('express');
const app = express();
const os = require('os');

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

app.use(express.static('static/public'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  console.log("Serving new request")
  res.render(__dirname + "/static/template/index.html", {arch: os.arch(), hostname: os.hostname(), uptime: String(os.uptime()).toHHMMSS() });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
