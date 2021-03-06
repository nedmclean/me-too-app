var model = require('../models')
var Forum = model.Forum;
var Post = model.Post;

module.exports = {
  createForum(req, res) {
    return Forum
    .create(req.body)
    .then(forum => {
      res.status(201).send(forum)
    
    })
  },
  
  deleteForum(req, res){
    return Forum
    .findById(req.params.id)
    .then(forum => {
      if (forum) {
        return forum
        .destroy()
        .then(()=> {
          res.status(200).send({
            message: "forum deleted"
          })
        })
      }else {
        res.status(404).send({
          message: "forum not found"
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  },

  getAllForum(req, res) {
    return Forum
    .all()
    .then(forums => {
      res.status(200).send(forums)
    })
    .catch(error => {
      console.log(error)
    })
  },
  getForumPost(req, res){
    return Post 
    .findAll({
      where: {
        forumId: req.params.id
      }
    }).then(post => {
      res.status(200).send(post)
    })
  }
}