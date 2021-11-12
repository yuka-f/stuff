const express = require('express');
const mysql = require('mysql2');
const e = require('express');
const app = express();

app.use(express.static('public'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlbaby171819',
    database: 'beauty_app'
  });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/search',(req,res) => {
    res.render('search.ejs');
});

app.get('/stuffsign',(req,res) => {
    res.render('stuffsign.ejs');
});

app.get('/result',(req,res) => {
    res.render('result.ejs');
});

app.listen(3000);