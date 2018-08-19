
import DbModels from "../models/dbhconnect";
import { signUpValidator , signInValidation } from '../helpers/authvalidator';

const dbModels = new DbModels;

 const signupUserExist = (req, res, next) => {
        const check_error = signUpValidator(req.body);
  
      if (check_error) {
        return res.status(400).json({ error: check_error });
      }

        let input_email = req.body.user_email; 
        const email_sql = `SELECT * FROM users WHERE user_email = $1`;
        let param = [input_email];
        dbModels.pool.query(email_sql, param)
        .then(result => {
            if (result.rowCount !== 0){
                return res.status(409).json({ error: 'User already exist!' });
            }
            else{
                next();
            }
        })
 }


 const signInUserInputVal = (req, res, next) => {
    const error_holder = signInValidation(req.body);
  
      if (error_holder) {
        return res.status(400).json({ error: error_holder });
      }
      else{
          next();
      }

 }


export {signupUserExist, signInUserInputVal};
  