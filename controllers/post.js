var model = require('../models')
var Post = model.Post;

module.exports = {
  createPost(req, res) {
    return Post
    .create(req.body)
    .then(post => {
      res.status(201).send(post)
    
    })
  }
}