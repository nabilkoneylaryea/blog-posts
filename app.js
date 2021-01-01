const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const blogPosts = require('./BlogPosts');

// INIT APP
const app = express();

// INIT ENGINE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, '/public')));

// SET UP BASIC ROUTE TO MAKE SURE EVERYTHING IS WORKING
app.get('/', (req, res) => {
    res.render('index', {posts: blogPosts});
});

// MUST LISTEN ON PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});
