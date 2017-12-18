
// This code renders the titles to the start.html page
$(document).ready(function() {

var posts = $("#posts");

function getPosts(category) {
// var title = posts[i].title;
// var user_id = posts[i].id;
// var description = posts[i].description;

 $.ajax({
      method: "GET",
      url: "/forum/"
    })
    .done(function(data) {
    	console.log(data);
    
    });

  };
getPosts();
});


// for(var i = 0; i < posts.length; i++){

// var title = posts[i].title;
// var user_id = posts[i].id;
// var description = posts[i].description;

// // create the links using the a href tags
// $('#posts').prepend("<div class='postTitles' id="+user_id+">"+title+"<p class='description'>"+description+"</p></div>");	

// }


// }

// this is for the post page.
// I need to find the post id in my array of post and render it to the post.html page. Go over the array and find the id of that was selected. I will not need a for loop for this. I need to refer to past lessons for help with this code.

// for(var j = 0; j < posts.length; j++){

// var title = posts[j].title;
// var id = posts[j].id;
// var post = posts[i].body;

// // name the class of this div and place it in the append

// $('#fullPost').prepend("<div id='titlePost' id="+id+">"+title+"</div><div class='posts'>"+post+"</div>");	

// }

// $(document).on('click', '.postTitles', function(){

// 	var $this = $(this).attr("id")

// 	window.location.href = "post.html"
// 	// console.log($this);
// })


