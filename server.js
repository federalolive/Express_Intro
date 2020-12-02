// Modules
const express = require('express');

// Express App
const app = express();

// Configure App

// Middleware

// Routes
app.get('/', function(req, res) {
    res.send('<h1>Airports</h1>');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
