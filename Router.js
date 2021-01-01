const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const PostModel = require('./BlogPosts');

const query = 'mongodb+srv://user:pass@cluster0.oyqoq.mongodb.net/blog-posts?retryWrites=true&w=majority';

const db = (query); // WHAT IS THIS??

mongoose.Promise = global.Promise; // WHAT IS THIS??

// DO I NEED ALL OF THOSE OPTIONS => YES YOU DO OLD URL PARSER IS DEPRECATED AND THERE ARE SERVER SIDE THINGS THAT UNIFIED TOPOLOGY GIVES YOU
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    if(err){
        console.log('Router.js Error:', err);
    }
});

// BLOG PAGE OR THE RETRIEVE IN CRUD
router.get('/', (req, res) => {
    PostModel.find({}).lean().exec((err, data) => {
        if (err) {
            console.log('ERROR ------------------------------')
            console.log(err);
        }
        else {
            // console.log('DATA BELOW ----------------------------')
            // console.log(data);
            res.render('index', {posts: data});
        }
    });
    
    // THIS SHOULD WORK BUT DOESN'T FOR SOME REASON SAYS HANDLEBARS DOESN'T HAVE ACCESS
    // PostModel.find({}, (err, posts) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.render('index', {posts: posts});
    //     }
    // });
});

// CREATE OR POST ROUTE
router.post('/posted', (req, res) => {
    const newPost = new PostModel({
        title: req.body.title,
        author: req.body.author,
        time: Date(),
        body: req.body.body
    })
    // console.log(newPost);
    newPost.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
        res.redirect('/');
    });  
});

// POSSIBLE DELETE ROUTE
module.exports = router;