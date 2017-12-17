var model = require('../models')
var User = model.User;

module.exports = {
  createUser(req, res) {
    return User
    .create(req.body)
    .then(user => {
      res.status(201).send({
        message: "user created",
        username: user.username,
        status: "successful"
        })
    })
    .catch(error => {
      console.log(error, "an error occured")
    })
  },

  // getAllUser(req, res) {
  //   return User
  //   .findAll
  // }  
}
