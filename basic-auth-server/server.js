var express = require("express");
var basicAuth = require("basic-auth-connect");

var app = express();
app.use(basicAuth(process.env.NODE_USERNAME, process.env.NODE_PASSWORD));
app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 4000);
