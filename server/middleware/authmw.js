import DbModels from "../models/dbhconnect";

const dbModels = new DbModels;

 const signupUserExist = (req, res, next) => {
  

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



export {signupUserExist};
  