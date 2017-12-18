// table One (below) is used for the manager to post a forum. Data is displayed below.

var dummyData = [
{
user_id: 100,
username:"string",
title: "Moving Forward...Past the Pain",
body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil.",
description:"people are in need of understanding. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem at quisquam ut, ex inventore ipsa. "
},


{
user_id: 101,
username:"string",
title: "A Bright Future is Ahead",
body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil.",
description:"Lorem ipsum dolor sit amet"
},

{
user_id: 102,
username:"string",
title: "One day at a Time",
body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde animi nam, quidem maiores mollitia veniam doloribus optio rem deleniti? Corporis aspernatur ex soluta similique, iusto laudantium illum assumenda nihil.",
description:"Be your best...do your best."
}

];

// table two will be used to 


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

// code for the "enter" button to the right of the "about" button on the home page

$("#enter").on("click", function(){
	
window.location.href = "start.html"	

});

// code for the geocoder button



