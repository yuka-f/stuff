const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('login.ejs');
});

app.get('/search',(req,res) => {
    res.render('search.ejs');
});

app.listen(3000);