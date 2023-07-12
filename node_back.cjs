var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  // verify username and password against database
  if (/* credentials are correct */) {
    res.send('Access granted');
  } else {
    res.send('Access denied');
  }
});

app.listen(3000);
