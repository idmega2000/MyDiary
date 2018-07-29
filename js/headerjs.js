var navbar_slider = document.getElementById("smallheader");
var signup_btn = document.getElementById("signupbtn");

if(navbar_slider){
	navbar_slider.addEventListener("click", drawNav);
}

let drawNav = () => {
	var nav_drawer = document.getElementById("slidenav");
	nav_drawer.classList.toggle("navslidetoggle");

}