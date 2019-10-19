const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(path.join(__dirname, '../Public')))
app.get('/Home', function (req, res) {
    res.render('Home');
});
app.get('/About', function (req, res) {
    res.render('About');
});
app.get('/Beetle', function (req, res) {
    res.render('Beetle');
});
app.get('/Crow', function (req, res) {
    res.render('Crow');
});
app.get('/Dog', function (req, res) {
    res.render('Dog');
});
app.get('/Frog', function (req, res) {
    res.render('Frog');
});
app.get('/Turtle', function (req, res) {
    res.render('Turtle');
});
app.get('/Zander', function (req, res) {
    res.render('Zander');
});


app.listen(3000, function () {
    console.log("Running Port 3000, Press Crl+c to terminate");
});

