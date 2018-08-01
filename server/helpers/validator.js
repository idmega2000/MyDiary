
export const InputErrors = (text_input) => {

  const emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
    return 'Please fill all field';
  }

  for (let i = 0; i < text_input.length; i++) {
    if ((!text_input[i]) || (text_input[i] === '')) {
      return 'Please fill all field';
    }
  }

  if((text_input.user_email.trim() === 0) || (text_input.user_password.trim() === 0 )){
    return 'White spaces are not allowed in mail and password'; 
  }
  else if (text_input.user_password.length < 6){
    return 'password must be 6 character and above';
  }

  else if (!text_input.user_email.match(emailReg)) {
    return 'Invalid Email';
  };
  
};

