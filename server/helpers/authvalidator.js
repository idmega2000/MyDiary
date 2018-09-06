 //gotten from stackoverflow
const emailReg = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const alpha_only = (/^[a-zA-Z ]*$/);

const signUpValidator = (req, res, next) => {
  //regex idea  gotten from https://forums.asp.net/t/1446828.aspx?Check+white+space+is+available+in+a+string+using+javascript
  let text_input = req.body;
  let whitespace = (/([\s]+)/g);
  let password = text_input.user_password;
  let email = text_input.user_email;
  let name = text_input.user_name;
 
 
  if(!name || !email || !password){
    return res.status(400).json({ error: 'Please fill all field'});
  }
  else if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
    return res.status(400).json({ error: 'invalid input'});
  } 
  else if (password.match(whitespace) || name.match(whitespace) || email.match(whitespace)){
    return res.status(400).json({ error: 'white sapce are not allowed in input'});
  }
  else if (!email.match(emailReg)) {
    return res.status(400).json({ error: 'Invalid Email'});
  }
  else if (!name.match(alpha_only)){
    return res.status(400).json({ error: 'names can only be character'});
  }
  else if (name.length < 3){
    return res.status(400).json({ error: 'names should be three character and above'});
  }
  else if (password.length < 6){
    return res.status(400).json({ error: 'password must be 6 character and above'});
  }
  next();
}

const signInValidation = (req, res, next) => {
  let text_input = req.body;
  let whitespace = (/([\s]+)/g);
  let password = text_input.user_password;
  let email = text_input.user_email;


   
  if(!email || !password){
    return res.status(400).json({ error: 'Please fill all field'});
  }

  else if(typeof email !== 'string' || typeof password !== 'string'){
    return res.status(400).json({ error: 'invalid input'});
  }
  else if (password.match(whitespace) || email.match(whitespace)){
    return res.status(400).json({ error: 'white sapce are not allowed in input'});
  }
  else if (!email.match(emailReg)) {
    return res.status(400).json({ error: 'Invalid Email'});
  }
  else if (password.length < 6){
    return res.status(400).json({ error: 'password must be 6 character and above'});
  }

  next();

}

export {signUpValidator, signInValidation}

