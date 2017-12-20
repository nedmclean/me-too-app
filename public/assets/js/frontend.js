
// This code renders the titles to the start.html page
$(document).ready(function() {

var posts = $("#posts");

  // var btn1 = "MeToo";
  // var btn2 = "I Hear You";

$('#forum').on('click', '.forumTitles', function(){ 

var $this = $(this)
console.log($this);
 
  $.ajax({
      method: "GET",
      url: "/posts/"
    })
    .done(function(posts) {
    
      console.log(posts, "hey you");

      for(var i = 0; i < posts.length; i++){

          // var btn1 = "MeToo";
          // var btn2 = "I Hear You";
          var username = posts[i].username;
          var body = posts[i].body;
          var id = posts[i].id;

          // create the links using the a href tags
         $('#fullPost').prepend("<div class='postTitles' id="+username+"><a href = '/post/"+id+ "'></href><p class='description'>"+body+"</p></div>");
          	
      	};
  });

})

$("#send").click(function(e) {
  alert('clicked')
})
function getForum() {
  $.ajax({
    method: "GET",
    url: "/posts/",
  })
  .done(function(forums) {
    for (var i = 0; i<forums.length; i++) {
      console.log(forums)
      $("#forum").prepend("<div class ='forumTitles' id='"+forums[i].id+"'>" + forums[i].body+ "</div>")

    }
  })
}
getForum()




});

// $(document).on('click', '.postTitles', function(){

// 	var $this = $(this).attr("id")

// 	window.location.href = "post.html"
// })


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



