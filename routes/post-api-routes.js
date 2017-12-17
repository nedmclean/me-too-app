var controller = require('../controllers');
var userController = controller.user
var postController = controller.post

module.exports = (app) => {
  app.post('/users', userController.createUser)
  app.get('/users', userController.getAllUser)
  app.post('/login', userController.login)
  
  app.post('/post', postController.createPost )
}
