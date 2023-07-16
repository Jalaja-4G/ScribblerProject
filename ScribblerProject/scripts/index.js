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

// Create Post Modal
var createpostmodal = document.getElementById("myCreatePostModal");

var createpostbtn = document.getElementById("CreatePostButton");

var span3 = document.getElementsByClassName("close4")[0];

createpostbtn.onclick = function() {
  createpostmodal.style.display = "block";
}

span3.onclick = function() {
  createpostmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == createpostmodal) {
    createpostmodal.style.display = "none";
  }
}


// Sign Up Hyperlink Modal
var hyperlinkmodal = document.getElementById("mySignUpModal");
var signinmodal_disable = document.getElementById("mySignInModal");


var hyperlinkbtn = document.getElementById("hyperlink");

var span4 = document.getElementsByClassName("close3")[0];

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