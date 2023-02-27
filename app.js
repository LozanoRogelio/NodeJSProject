const express = require('express');

// express app
const app = express();

// register view engine

app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
   // res.send('<p>Home Page</p>');
   res.render('index');
});
app.get('/about', (req, res) => {
   // res.send('<p>About Page</p>');
   // res.sendFile('./views/about.html', { root: __dirname})
   res.render('about');
});

// new blog
app.get('/blogs/create', (req, res) => {
   res.render('create');
})

// 404 Page
app.use((req, res) => {
   res.status(404).render('404');
});