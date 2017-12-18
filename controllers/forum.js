var model = require('../models')
var Forum = model.Forum;

module.exports = {
  createForum(req, res) {
    return Forum
    .create(req.body)
    .then(forum => {
      res.status(201).send(forum)
    
    })
  }
}