const Post = require('../models/post');

let PostCtrl = {
  addPost(req, res, next) {
    console.log(req.body)
    let newPost = new Post({
      topic: req.body.topic,
      content: req.body.content,
      profile: req.body.profile,
      cat: req.body.cat,
      isUse: req.body.isUse
    })
    newPost.save((err, post) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: 'Failed to add post' });
      } else {
        this.getAll((err, post) => {
          res.json({ success: true, msg: 'Added post success', post: post });
        });
      }
    });
  },
  getAll(callback) {
    Post.find({}, callback);
  },
  searchPost(req, res, next) {
    let postCriteria = {};
    ; (req.body._id) ? postCriteria._id = req.body._id : null;
    ; (req.body.topic) ? postCriteria.topic = { $regex: req.body.topic } : null;
    ; (req.body.content) ? postCriteria.content = { $regex: req.body.content } : null;
    ; (req.body.cat) ? postCriteria.cat = { $in: req.body.cat } : null;
    ; (req.body.isUse) ? postCriteria.isUse = req.body.isUse : null;
    Post.find(postCriteria, (err, post) => {
      if (err) {
        console.log(err)
        res.json({ success: false, msg: 'something went wrong on search post' });
      } else {
        res.json({ success: true, msg: 'Search post success', post: post });
      }
    });
  },
  updatePost(req, res, next) {
    let postData = {};
    console.log(req.body)
    ; (req.body.topic) ? postData.topic = req.body.topic : null;
    ; (req.body.content) ? postData.content = req.body.content : null;
    ; (req.body.cat) ? postData.cat = req.body.cat : null;
    ; (req.body.isUse !== undefined) ? postData.isUse = req.body.isUse : null;
    Post.findOneAndUpdate({ _id: req.body._id }, postData, (err, post) => {
      if (err) {
        console.log(err);
        res.json({ success: false, msg: 'something went wrong on edit post' });
      } else {
        res.json({ success: true, msg: 'Edit post success', post: post });
      }
    });
  }
}

module.exports = PostCtrl;