
export const InputErrors = (text_input) => {

  //gotten from stackoverflow
  const emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const alpha_only = (/^[a-zA-Z ]*$/);
  if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
    return 'Please fill all field';
  }

  for (let i = 0; i < text_input.length; i++) {
    if ((!text_input[i]) || (text_input[i] === '')) {
      return 'Please fill all field';
    }
  }

  if((text_input.user_name.trim() === 0) || (text_input.user_password.trim() === 0 )){
    return 'White spaces are not allowed in name and password'; 
  }
  else if (text_input.user_password.length < 6){
    return 'password must be 6 character and above';
  }

  else if (!text_input.user_email.match(emailReg)) {
    return 'Invalid Email';
  }
  else if (!text_input.user_name.match(alpha_only)){
    return 'names can only be character';
  }
  else if (!text_input.user_name.length < 3){
    return 'names should be three character and above';
  }
  
};

