var express = require("express");
var basicAuth = require("basic-auth-connect");

var app = express();
app.use(basicAuth(
  process.env.NODE_USERNAME || "username",
  process.env.NODE_PASSWORD || "password"));
app.use(express.static(__dirname + "/dist"));
app.use(function (req, res, next) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 4000);
