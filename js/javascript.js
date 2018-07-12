
var navbar_slider = document.getElementById("smallheader");

navbar_slider.addEventListener("click", drawNav);

function drawNav() {
	var nav_drawer = document.getElementById("slidenav");
	nav_drawer.classList.toggle("navslidetoggle");

}
var signup_btn = document.getElementById("signupbtn");
signup_btn.addEventListener("click", SignupValidation);


function SignupValidation(){
	//to check for simple validation 
	var alphanum  = /^[a-z0-9]+$/i;
	var emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	var input_email = document.getElementById('emailInp').value;
	var input_password = document.getElementById('passInp').value;
	var input_repeat_password = document.getElementById('repeatPassInp').value;
	
	
	var ErrorHandle = document.getElementById('signupcontent').getElementsByTagName("span")[0];

	if ((input_email === "" || input_email.trim().length === 0) || 
	(input_password === "" || input_password.trim().length === 0) ||
	(input_repeat_password === "" || input_repeat_password.trim().length === 0)){
		ErrorHandle.innerHTML = " please fill all inputs";
		ErrorHandle.style.color = 'red';
		return;
	}
	else if(!input_email.match(emailReg)){
		ErrorHandle.innerHTML = " please enter a valid email";
		ErrorHandle.style.color = 'red';
		return;
	}
	else if (input_password != input_repeat_password){
		ErrorHandle.innerHTML = "please Enter the same password";
		ErrorHandle.style.color = 'red'; 
	}
	else if(input_password < 6){
		ErrorHandle.innerHTML = "password must be 6 or more character";
		ErrorHandle.style.color = 'red';
	}
	else if(!input_password.match(alphanum)){
		ErrorHandle.innerHTML = "password must be alphabet or number";
		ErrorHandle.style.color = 'red';
	}

}

function loginValidation(){
	
}
