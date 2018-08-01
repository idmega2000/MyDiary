import DbModels from "../../models/dbhconnect";
import { InputErrors } from '../validator';

const dbModels = new DbModels;

    const signupUserExist = (req, res, next) => {
        const check_error = InputErrors(req.body);
  
      if (check_error) {
        return res.status(400).json({ message: check_error });
      }

        let input_email = req.body.user_email; 
        const email_sql = `select * from users where user_email = $1`;
        let param = [input_email];
        dbModels.pool.query(email_sql, param)
        .then(result => {
            if (result.rowCount !== 0){
                console.log(result);
                return res.status(404).json({ message: 'User already exist!' });
            }
            else{
                next();
            }
        })
        
 }


export default signupUserExist;
  