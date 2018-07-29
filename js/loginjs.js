// login validation
var login_btn = document.getElementById("loginbtn");
if(login_btn){
	login_btn.addEventListener("click", loginValidation);
}


function loginValidation(){
	//to check for simple validation 
	var alphanum  = /^[a-z0-9]+$/i;
	var emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	var input_email = document.getElementById('emailInp').value;
	var input_password = document.getElementById('passInp').value;
	
	var ErrorHandle = document.getElementById('inputcontent').getElementsByTagName("span")[0];

	if ((input_email === "" || input_email.trim().length === 0) || 
	(input_password === "" || input_password.trim().length === 0)){
		ErrorHandle.innerHTML = " please fill all inputs";
		ErrorHandle.style.color = 'red';
	}
	else if((input_email.indexOf(' ') >=0) || (input_password.indexOf(' ') >=0)){
		ErrorHandle.innerHTML = " please whitespace is not allowed";
		ErrorHandle.style.color = 'red';
	}
	else if(!input_email.match(emailReg)){
		ErrorHandle.innerHTML = " please enter a valid email";
		ErrorHandle.style.color = 'red';
	}
	else if(input_password.length < 6){
		ErrorHandle.innerHTML = "password must be 6 or more character";
		ErrorHandle.style.color = 'red';
	}
	else if(!input_password.match(alphanum)){
		ErrorHandle.innerHTML = "password must be alphabet or number";
		ErrorHandle.style.color = 'red';
	}
	else if((input_email="kelanidris7@gmail.com") && (input_password="andela")){
		ErrorHandle.innerHTML = "";
		document.location.href = 'viewdiary.html';
		
		// login account
    }
    return;
	
}