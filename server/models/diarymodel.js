
import DbModels from "./dbhconnect";
const dbModels = new DbModels;


class diaryModel{

  getAllDiaries(db_user_id){
      const sql = `SELECT * FROM users WHERE user_id = $1`;
      let params = [db_user_id];
      return dbModels.pool.query(sql, params);
    }

  userSignIn(data){
    let input_email = data.user_email; 
        const email_sql = `select * from users where user_email = $1`;
        let param = [input_email];
        return dbModels.pool.query(email_sql, param);
        
  }
 
  }
export default diaryModel;
