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



function display_trash_modal(val) {
var trashmodal,trashbtn,span;
   switch(val) {
	case 1: trashmodal = document.getElementById("myTrashModal1");
		trashbtn = document.getElementById("TrashButton1");
		span = document.getElementsByClassName("close3")[0];
		break;
	case 2: trashmodal = document.getElementById("myTrashModal2");
		trashbtn = document.getElementById("TrashButton2");
		span = document.getElementsByClassName("close4")[0];
		break;
	case 3: trashmodal = document.getElementById("myTrashModal3");
		trashbtn = document.getElementById("TrashButton3");
		span = document.getElementsByClassName("close5")[0];
		break;
	case 4: trashmodal = document.getElementById("myTrashModal4");
		trashbtn = document.getElementById("TrashButton4");
		span = document.getElementsByClassName("close6")[0];
		break;
	case 5: trashmodal = document.getElementById("myTrashModal5");
		trashbtn = document.getElementById("TrashButton5");
		span = document.getElementsByClassName("close7")[0];
		break;
   }


trashbtn.onclick = function() {
  trashmodal.style.display = "block";
}

span.onclick = function() {
  trashmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == trashmodal) {
    trashmodal.style.display = "none";
  }
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


function remove_post(val) {
var trashmodal,yesbtn;
switch(val) {
  case 1: trashmodal = document.getElementById("myTrashModal1");
	  yesbtn = document.getElementById("yes1");
	  break;
  case 2: trashmodal = document.getElementById("myTrashModal2");
	  yesbtn = document.getElementById("yes2");
	  break;
  case 3: trashmodal = document.getElementById("myTrashModal3");
	  yesbtn = document.getElementById("yes3");
	  break;
  case 4: trashmodal = document.getElementById("myTrashModal4");
	  yesbtn = document.getElementById("yes4");
	  break;
  case 5: trashmodal = document.getElementById("myTrashModal5");
	  yesbtn = document.getElementById("yes5");
	  break;
}


yesbtn.onclick = function() {
  trashmodal.style.display = "none";
  var box_no=document.getElementById(val);
  
  box_no.style.display="none";
}

}

function retain_post(val) {
var trashmodal,nobtn;

switch(val) {
 case 1:trashmodal = document.getElementById("myTrashModal1");
	nobtn = document.getElementById("no1");
	break;

case 2:trashmodal = document.getElementById("myTrashModal2");
	nobtn = document.getElementById("no2");
	break;

case 3:trashmodal = document.getElementById("myTrashModal3");
	nobtn = document.getElementById("no3");
	break;

case 4:trashmodal = document.getElementById("myTrashModal4");
	nobtn = document.getElementById("no4");
	break;

case 5:trashmodal = document.getElementById("myTrashModal5");
	nobtn = document.getElementById("no5");
	break;
}


// When the user clicks on <span> (x), close the modal
nobtn.onclick = function() {
  trashmodal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == trashmodal) {
    trashmodal.style.display = "none";
  }
}
}

