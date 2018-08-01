import DbModels from "../../models/dbhconnect";

const dbModels = new DbModels;

    const signupUserExist = (req, res, next) => {
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
  