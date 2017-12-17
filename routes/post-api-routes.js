var controller = require('../controllers');
var userController = controller.user

module.exports = (app) => {
  app.post('/users', userController.createUser)
}
