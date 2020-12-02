// Modules
const express = require('express');
const path = require('path');
const airportDb = require('./data/airports')

// Express App
const app = express();

// Configure App
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware

// Routes
app.get('/'), function(req, res) {
    res.redirect('/home');
}

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/airports', function(req, res) {
    res.render('./airport/index'), {
        airport: airportDb.getAll()
    }
})

app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
