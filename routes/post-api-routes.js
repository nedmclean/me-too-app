var controller = require('../controllers');
var userController = controller.user
var postController = controller.post

module.exports = (app) => {
  app.post('/users', userController.createUser)
  app.get('/users', userController.getAllUser)
  app.post('/login', userController.login)
  app.post('/post', postController.createPost )
}

// var postTitle={
	
// 	id:100,
// 	title:"",
// 	description:""

// }

// var userPost={
// 	titleId:100,
// 	name: "",
// 	post:""
// }

// var name = req.username;
// var postTitle = req.title;
// var describe = req.description

// for(var i = 0; i<)