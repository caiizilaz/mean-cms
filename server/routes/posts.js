const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const PostCtrl = require('../controller/post-ctrl');

router.post('/create', (req, res, next) => {
  PostCtrl.addPost(req, res, next);
});

router.get('/read', (req, res, next) => {
  Post.find({ isUse: true }, (err, post) => {
    res.json(post);
  })
});

router.post('/search', (req, res, next) => {
  PostCtrl.searchPost(req, res, next);
});

router.put('/update', (req, res, next) => {
  PostCtrl.updatePost(req, res, next);
})

// router.delete('/delete/:id', (req, res, next) => {
//   TodoCtrl.deleteItem(req, res, next);
// });

module.exports = router;