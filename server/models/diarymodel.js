
import DbModels from "./dbhconnect";
const dbModels = new DbModels;


class diaryModel{

  getAllDiaries(db_user_id){
      const sql = `SELECT * FROM diaries WHERE user_id = $1`;
      let params = [db_user_id];
      return dbModels.pool.query(sql, params);
    }

    addANewDiary(id, req_body){
      const user_id = id;
      const diary_title = req_body.diary_title;
      const diary_image = req_body.diary_image;
      const diary_body = req_body.diary_content;
      const date_created = new Date;
      const date_updated = new Date;


      const sql = `INSERT INTO diaries(user_id, diary_title, diary_image, diary_content, date_created, date_updated ) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

      let params = [user_id, diary_title, diary_image, diary_body, date_created, date_updated];

      return dbModels.pool.query(sql, params);
        
  }
 
}
export default diaryModel;
