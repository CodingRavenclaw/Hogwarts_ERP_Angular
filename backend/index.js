const express = require('express');
const bodyParser = require('body-parser');
const routeStudents = require('../backend/routes/students');
const routeHouses = require('../backend/routes/houses');
const routeBloodstatus = require('../backend/routes/bloodstatus');
const app = express();

// Set headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use the bodyparser for JSON files and set the routes
app.use(bodyParser.json());
app.use(routeStudents);
app.use(routeHouses);
app.use(routeBloodstatus);

app.listen(3000, () => console.log('Ich lausche auf den Port 3000! / I listen to the port 3000!'));
