//Sign Up Button Modal
var signupmodal = document.getElementById("mySignUpModal");

// Get the button that opens the modal
var signupbtn = document.getElementById("sign-up");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
signupbtn.onclick = function() {
  signupmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  signupmodal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
}


// Sign In Button Modal
var signinmodal = document.getElementById("mySignInModal");

var signinbtn = document.getElementById("sign-in");

var span2 = document.getElementsByClassName("close2")[0];

signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}

span2.onclick = function() {
  signinmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
}

// Sign Up Hyperlink Modal
var hyperlinkmodal = document.getElementById("mySignUpModal");
var signinmodal_disable = document.getElementById("mySignInModal");


var hyperlinkbtn = document.getElementById("hyperlink");

var span4 = document.getElementsByClassName("close2")[0];

hyperlinkbtn.onclick = function() {
  hyperlinkmodal.style.display = "block";
  signinmodal_disable.style.display="none";
}

span4.onclick = function() {
  hyperlinkmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == hyperlinkmodal) {
    hyperlinkmodal.style.display = "none";
  }
}

function show_post_details(val) {
	let title,author,content,postmodal,url
	switch(val) {
		case 1:
			postmodal = document.getElementById("myAllPosts");
		
			//console.log("hi");
			
			title = document.getElementById('heading-1').innerHTML;
			author = document.getElementById('author-1').innerHTML;
			content = document.getElementById('post-content-1').innerHTML;
			console.log(title);
			console.log(author);
			console.log(content);
			url = "../html/post.html?heading=" + title  + 
			"&author=" + author + "&content=" + content;
			
			window.location.href = url;
			break;
		case 2:
			postmodal = document.getElementById("myAllPosts");
		
			//console.log("hi");
			
			title = document.getElementById('heading-2').innerHTML;
			author = document.getElementById('author-2').innerHTML;
			content = document.getElementById('post-content-2').innerHTML;
			console.log(title);
			console.log(author);
			console.log(content);
			url = "../html/post.html?heading=" + title  + 
			"&author=" + author + "&content=" + content;
			
			window.location.href = url;
			break;
		case 3:
			postmodal = document.getElementById("myAllPosts");
		
			//console.log("hi");
			
			title = document.getElementById('heading-3').innerHTML;
			author = document.getElementById('author-3').innerHTML;
			content = document.getElementById('post-content-3').innerHTML;
			console.log(title);
			console.log(author);
			console.log(content);
			url = "../html/post.html?heading=" + title  + 
			"&author=" + author + "&content=" + content;
			
			window.location.href = url;
			break;

		case 4:
			postmodal = document.getElementById("myAllPosts");
		
			//console.log("hi");
			
			title = document.getElementById('heading-4').innerHTML;
			author = document.getElementById('author-4').innerHTML;
			content = document.getElementById('post-content-4').innerHTML;
			console.log(title);
			console.log(author);
			console.log(content);
			url = "../html/post.html?heading=" + title  + 
			"&author=" + author + "&content=" + content;
			
			window.location.href = url;
			break;

		case 5:
			postmodal = document.getElementById("myAllPosts");
		
			//console.log("hi");
			
			title = document.getElementById('heading-5').innerHTML;
			author = document.getElementById('author-5').innerHTML;
			content = document.getElementById('post-content-5').innerHTML;
			console.log(title);
			console.log(author);
			console.log(content);
			url = "../html/post.html?heading=" + title  + 
			"&author=" + author + "&content=" + content;
			
			window.location.href = url;
			break;

	}
}

function extract_post_details() {
	const params = new URLSearchParams(window.location.search);
	var heading = params.get('heading');
	var author = params.get('author');
	var content = params.get('content');
	console.log(heading);
	var postHeading = document.getElementById("post-heading");
	var postAuthor = document.getElementById("post-author");
	var postContent = document.getElementById("post-content");
	postHeading.innerHTML = heading;
	postAuthor.innerHTML = author;
	postContent.innerHTML = content;
}

function make_editable(button) {
	var heading = document.getElementById("post-heading");
	var content = document.getElementById("post-content");
	if (heading.contentEditable == "true") {
		heading.contentEditable = "false";
		content.contentEditable = "false";
		button.innerHTML = 'Edit';
	} else {
		heading.contentEditable = "true";
		content.contentEditable = "true";
		button.innerHTML = 'Save';

	}
}

var count=0;
function update_like_count() {
	var likeTagline = document.getElementById("like_tagline");
	console.log(count);
	count++;
	document.getElementById("like").innerHTML="<i class='fa fa-thumbs-up'></i> Liked";
	likeTagline.innerHTML = count+' person likes this!';
}

function display_comment() {
	document.getElementById("allComments").style.display="block";

	var comment=document.getElementById("comment").value;
	console.log(comment);
	
	document.getElementById('allComments').innerHTML+="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+comment+"</p>";
	document.getElementById('comment').value="";
	//console.log(document.getElementById('comment').innerHTML);
}