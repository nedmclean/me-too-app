var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  // the routes are not being read from here. As of 12-17-17
 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

   app.get("/start", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/start.html"));
  });

  app.get("/post/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/post.html"));
  });

// cms route loads cms.html
  app.get("/post/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/post.html"));
  });

  app.get("/share", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/post_form.html"));
  });

  // blog route loads blog.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // authors route loads author-manager.html
  app.get("/manager", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/manage.html"));
  });

}




// var express = require("express");
// var router = express.Router();
// var path = require("path");

// // Routes
// // =============================================================


//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   // router.use(express.static("public"));

//   router.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "/../public/index.html"));

// });

//  router.get("/start", function(req, res) {
    
//     res.sendFile(path.join(__dirname, "../../public/start.html"));
//   });

//   // cms route loads cms.html
//   router.get("/post", function(req, res) {
    
//     res.sendFile(path.join(__dirname, "../post.html"));

//   });

//   // blog route loads blog.html
//   router.get("/about", function(req, res) {
//     res.sendFile(path.join(__dirname, "about.html"));
//   });

//   // authors route loads author-manager.html
//   router.get("/manage", function(req, res) {
//     res.sendFile(path.join(__dirname, "manage.html"));
//   });

// module.exports = router
