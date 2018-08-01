import bcrypt from "bcrypt";
import DbModels from "./dbhconnect";

const dbModels = new DbModels;


class AuthModel{

  userSignup(data){
    
      const salt = bcrypt.genSaltSync(10);
      const hash_password = bcrypt.hashSync(data.user_password, salt);
      const sql = `INSERT INTO users(user_email, user_password, user_name) VALUES ($1, $2, $3) RETURNING *`;
      let params = [data.user_email, hash_password, data.user_name];
      return dbModels.pool.query(sql, params);
    
    }
 
  }
export default AuthModel;





