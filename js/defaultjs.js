

//reminder page
//check if use my email is unchecked
var email_unchecked = document.getElementById("emailchecked");
if(email_unchecked){
	email_unchecked.addEventListener("change", emaiilUnchecked);
}

function emaiilUnchecked(){
	if (email_unchecked.checked == true){
		document.getElementById("emailinp").disabled = true;
	}
	else{
		document.getElementById("emailinp").disabled= false;
	}
}

var navbar_slider = document.getElementById("smallheader");
if(navbar_slider){
	navbar_slider.addEventListener("click", drawNav);
}

function drawNav() {
	var nav_drawer = document.getElementById("slidenav");
	nav_drawer.classList.toggle("navslidetoggle");

}