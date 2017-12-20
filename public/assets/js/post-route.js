$(document).ready(function() {

var posts = $("#fullPost");
var path = window.location.pathname.slice(5);

function getPosts(category) {
// var title = posts[i].title;
// var user_id = posts[i].id;
// var description = posts[i].description;

 $.ajax({
      method: "GET",
      url: "/getPostById" + path
    })
    .done(function(posts) {
    
    console.log(posts);


var username = posts.post.username;
var body = posts.post.body;
var id = posts.post.id;

// create the links using the a href tags
$('#fullPost').prepend("<div class='postTitles' id="+username+"><p class='description'>"+body+"</p></div>");	
	

 });


  };
getPosts();



});