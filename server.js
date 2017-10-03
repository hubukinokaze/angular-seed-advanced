// server.js
var csp = require('content-security-policy');
const express = require('express');
const app = express();

var cspPolicy = {
  "report-uri" : "/reporting",
  "default-src" : CSP.SRC_NONE,
  "script-src" : [ CSP.SRC_SELF ]
};
var globalCSP = csp.getCSP(csp.STARTER_OPTIONS);

app.use(globalCSP);
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
console.log('listening on port: ', process.env.PORT || 8080);
