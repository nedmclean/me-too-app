var model = require('../models')
var Forum = model.Forum;

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
  }
}