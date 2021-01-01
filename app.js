const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const blogPosts = require('./BlogPosts');

// INIT APP
const app = express();

// INIT ENGINE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, '/public')));

// SET UP BASIC ROUTE TO MAKE SURE EVERYTHING IS WORKING
app.get('/', (req, res) => {
    res.render('index', {posts: blogPosts});
});

// THIS IS THE ROUTE FOR POSTING
app.post('/posted', (req,res) => {
    const newPost = {
        id: 100,
        title: req.body.title,
        author: req.body.author,
        time: Date(),
        body: req.body.body
    }
    // console.log(newPost);
    res.redirect('/');
});

// MUST LISTEN ON PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});
