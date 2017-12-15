var dummyData = [
{
user_id: 100,
title: "Moving Forward...Past the Pain",
post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil."
},

{
user_id: 101,
title: "A Bright Future is Ahead",
post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil."

},

{

user_id: 102,
title: "One day at a Time",
post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil."

}

];

// This code renders the titles to the start.html page
for(var i = 0; i < dummyData.length; i++){

var title = dummyData[i].title
var user_id = dummyData[i].user_id

// create the links using the a href tags
$('#posts').append("<div class='postTitles' id="+user_id+"><"+title+"</div>");	

}
// this is for the post page.
// I need to find the post id in my array of post and render it to the post.html page. Go over the array and find the id of that was selected. I will not need a for loop for this. I need to refer to past lessons for help with this code.

for(var j = 0; j < dummyData.length; j++){

var title = dummyData[j].title
var user_id = dummyData[j].user_id
var body = dummyData[j].post

// name the class of this div and place it in the append

$('#fullPost').append("<div id='titlePost' id="+user_id+">"+title+"</div><div class='posts'>"+body+"</div>");	

}

$(document).on('click', '.postTitles', function(){

	var $this = $(this).attr("id")
	console.log($this);
})



// code for the button for the introduction page
$("#about").on("click", function(){

window.location.href = "about.html"

});

// code for the geocoder button



