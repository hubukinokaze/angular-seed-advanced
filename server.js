// server.js
const csp = require('content-security-policy');
const express = require('express');
const app = express();

var globalCSP = csp.getCSP(csp.STARTER_OPTIONS);

app.use(globalCSP);
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
console.log('listening on port: ', process.env.PORT || 8080);
