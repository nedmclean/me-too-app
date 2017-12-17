var model = require('../models')
var User = model.User;
var bcrypt = require('bcrypt-nodejs')
var isValid = function(password, realpassword) {
  return bcrypt.compareSync(password, realpassword);
}

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

  getAllUser(req, res) {
    return User
    .all()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(error => {
      console.log(error)
    })
  },

  login(req, res) {
    return User
    .findOne({
      where: {
        username: req.body.username
    
      }
    }).then(user => {
      if(user && isValid(req.body.password, user.password)) {
        res.status(200).send({
          message: "successfully logged in"
        })
      }
        else{
        return res.status(404).send({
          message: "invalid login"
        }) }
    })
    
  }
}
