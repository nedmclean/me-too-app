
// This code renders the titles to the start.html page
for(var i = 0; i < dummyData.length; i++){

var title = dummyData[i].title
var user_id = dummyData[i].user_id
var username=dummyData[i].username
var descrip = dummyData[i].description

// create the links using the a href tags
$('#posts').append("<div class='postTitles' id="+user_id+">"+title+"<p class='description'>"+descrip+"</p></div>");	
}

// this is for the post page.
// I need to find the post id in my array of post and render it to the post.html page. Go over the array and find the id of that was selected. I will not need a for loop for this. I need to refer to past lessons for help with this code.

for(var j = 0; j < dummyData.length; j++){

var title = dummyData[j].title
var user_id = dummyData[j].user_id
var body = dummyData[j].body

// name the class of this div and place it in the append

$('#fullPost').append("<div id='titlePost' id="+user_id+">"+title+"</div><div class='posts'>"+body+"</div>");	

}

$(document).on('click', '.postTitles', function(){

	var $this = $(this).attr("id")

	window.location.href = "post.html"
	// console.log($this);
})


