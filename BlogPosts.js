const mongoose = require('mongoose');
// SCHEMA FOR BLOG POSTS

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    time: String,
    body: {type: String, required: [true, 'Post needs a body']}
});

//SAMPLE BLOG POSTS
// const blogPosts = [
//     {
//         id: 1,
//         title: 'Blog Post 1',
//         author: 'Nabil Koney-Laryea',
//         time: Date(),
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur hic vitae facere sed asperiores error nemo esse consequuntur delectus optio dicta itaque vero dolorum rerum, voluptate temporibus, totam repellendus!'
//     },
//     {
//         id: 2,
//         title: 'Blog Post 2',
//         author: 'Nabil Koney-Laryea',
//         time: Date(),
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur hic vitae facere sed asperiores error nemo esse consequuntur delectus optio dicta itaque vero dolorum rerum, voluptate temporibus, totam repellendus!'
//     },
//     {
//         id: 3,
//         title: 'Blog Post 3',
//         author: 'Nabil Koney-Laryea',
//         time: Date(),
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur hic vitae facere sed asperiores error nemo esse consequuntur delectus optio dicta itaque vero dolorum rerum, voluptate temporibus, totam repellendus!'
//     },
// ];

module.exports = mongoose.model('Post', postSchema);