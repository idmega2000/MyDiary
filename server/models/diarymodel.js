
import DbModels from "./dbhconnect";
const dbModels = new DbModels;


class diaryModel{

  getAllDiaries(db_user_id){

    let diaryDeleted = true;
      const sql = `SELECT diary_id,
      user_id, 
      diary_title, 
      diary_image,
      diary_content,  
      date_created, 
      date_updated FROM diaries WHERE (user_id = $1 And diary_deleted is NULL)` ;
      let param = [db_user_id];
      return dbModels.pool.query(sql, param);
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

  getSingleDiary(diaryId, userId){
     const sql = `SELECT * FROM diaries WHERE user_id = $1 AND (diary_id = $2 AND And diary_deleted is NULL)`;
      let param = [userId,diaryId];

      return dbModels.pool.query(sql, param);
  }
  
  editADiary(id, paramId, reqBody) {

      const user_id = id;
      const diary_title = reqBody.diary_title;
      const diary_body = reqBody.diary_content;
      const date_updated = new Date;

    const sql = `UPDATE diaries SET 
                  diary_title = $1,
                  diary_content = $2,
                  date_updated =$3
                  WHERE user_id = $4 AND 
                  diary_id =$5 RETURNING *;
                  ` ;
    let param = [diary_title, diary_body, date_updated, user_id, paramId];
    return dbModels.pool.query(sql, param);
  }


  deleteADiary(userId, paramId){
    const date_updated = true;

    const sql = `UPDATE diaries SET 
                  diary_deleted = $1
                  WHERE user_id = $2 AND 
                  diary_id =$3 RETURNING *;
                  `;

      let param = [date_updated, userId, paramId];
      return dbModels.pool.query(sql, param);
  }
 
}


export default diaryModel;
