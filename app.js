const express = require('express');

const app = express();

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