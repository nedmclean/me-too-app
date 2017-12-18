var controller = require('../controllers');
var userController = controller.user
var postController = controller.post
var forumController = controller.forum

module.exports = (app) => {
  // users controllers
  app.post('/users', userController.createUser)
  app.get('/users', userController.getAllUser)
  app.post('/login', userController.login)

  app.put('/users/:id', userController.updateUser)
  app.delete('/user/:id', userController.deleteUser)

// post controllers
  app.post('/post', postController.createPost)
  app.put('/post/:id', postController.updatePost)
  app.get('/posts', postController.getAllPost)
  app.delete('/post/:id', postController.deletePost)
  app.get('postall/:id', postController.getAllPostByForum)

// forum controllers
  app.post('/forum', forumController.createForum)
  app.get('/forum', forumController.getAllForum)
  app.delete('/forum/:id', forumController.deleteForum) 


  app.post('/post', postController.createPost )
}