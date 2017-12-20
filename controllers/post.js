var model = require('../models')
var Post = model.Post;

module.exports = {
  createPost(req, res) {
    return Post
    .create(req.body)
    .then(post => {
      res.status(201).send(post)
    
    })
  },

  updatePost(req, res){
    return Post
    .findById(req.params.id)
    .then(post => {
      if (post) {
        return post
        .update(req.body)
        .then(() => {
          res.status(200).send(post)
        })
      }
      else {
        return res.status(404).send({
          message: "post not found"
        })
      }
    })
  },

  deletePost(req, res){
    return Post
    .findById(req.params.id)
    .then(post => {
      if (post) {
        return post
        .destroy()
        .then(()=> {
          res.status(200).send({
            message: "post deleted"
          })
        })
      }else {
        res.status(404).send({
          message: "post not found"
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  },

    getAllPost(req, res) {
      return Post
      .all()
      .then(posts => {
        res.status(200).send(posts)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getPostById(req, res) {
      return Post
      .findById(req.params.id)
      .then(post => {    
          res.status(200).send({
            post
          })
        })
      }
    
}

