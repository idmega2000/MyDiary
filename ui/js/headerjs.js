let navbar_slider = document.getElementById("smallheader");

let drawNav = () => {
	let nav_drawer = document.getElementById("slidenav");
	nav_drawer.classList.toggle("navslidetoggle");

}

if(navbar_slider){
	navbar_slider.addEventListener("click", drawNav);
}