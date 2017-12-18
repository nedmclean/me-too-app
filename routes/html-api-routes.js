
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  
  // home page with "about" button and "enter" button link to start page
    app.get("/", function(req, res) {
    res.sendFilm(path.join(__dirname, "../public/index.html"));
  });

  // index route loads view.html
  app.get("/start", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/start.html"));
  });
  // cms route loads cms.html
  app.get("/post", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/post.html"));
  });

  // blog route loads blog.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // authors route loads author-manager.html
  app.get("/manager", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/manage.html"));
  });

  // 
  

};
