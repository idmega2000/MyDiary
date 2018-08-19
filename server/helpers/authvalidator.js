 //gotten from stackoverflow
const emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const alpha_only = (/^[a-zA-Z ]*$/);

const signUpValidator = (text_input) => {
  //regex idea  gotten from https://forums.asp.net/t/1446828.aspx?Check+white+space+is+available+in+a+string+using+javascript
  let whitespace = (/([\s]+)/g);
  let password = text_input.user_password;
  let email = text_input.user_email;
  let name = text_input.user_name;
 
 

  if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
    return 'Please fill all field';
  }
  else if(name === '' || email === '' || password === ''){
    return 'Please fill all field';
  }
  else if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
    return 'invalid input';
  } 
  else if (password.match(whitespace) || name.match(whitespace) || email.match(whitespace)){
    return 'white sapce are not allowed in input';
  }
  else if (!email.match(emailReg)) {
    return 'Invalid Email';
  }
  else if (!name.match(alpha_only)){
    return 'names can only be character';
  }
  else if (name.length < 3){
    return 'names should be three character and above';
  }
  else if (!email.match(emailReg)) {
    return 'Invalid Email';
  }
  else if (password.length < 6){
    return 'password must be 6 character and above';
  }
}

const signInValidation = (text_input) => {
  let whitespace = (/([\s]+)/g);
  let password = text_input.user_password;
  let email = text_input.user_email;


  if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
    return 'Please fill all field';
  }
  else if( email === '' || password === ''){
    return 'Please fill all field';
  }
  else if(typeof email !== 'string' || typeof password !== 'string'){
    return 'invalid input';
  }
  else if (password.match(whitespace) || email.match(whitespace)){
    return 'white sapce are not allowed in input';
  }
  else if (!email.match(emailReg)) {
    return 'Invalid Email';
  }
  else if (password.length < 6){
    return 'password must be 6 character and above';
  }
}

export {signUpValidator, signInValidation}

