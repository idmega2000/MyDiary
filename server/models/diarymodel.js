
import DbModels from "./dbhconnect";
const dbModels = new DbModels;


class diaryModel{

  getAllDiaries(db_user_id){

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

    addANewDiary(id, req, res){

      let date_created = new Date();
      
      if (process.env.NODE_ENV === 'test') {
        date_created.setDate(date_created.getDate() + 1);
      }

      const user_id = id;
      const diary_title = req.body.diary_title;
      const diary_image = res.locals.fileName;
      const diary_body = req.body.diary_content;
     
      const date_updated =  new Date();


      const sql = `INSERT INTO diaries
                  (user_id, diary_title, 
                    diary_image, 
                    diary_content, 
                    date_created, 
                    date_updated ) 
                    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

      let params = [user_id, diary_title, diary_image, diary_body, date_created, date_updated];

      return dbModels.pool.query(sql, params);
        
  }

  getSingleDiary(diaryId, userId){
     const sql = `SELECT * FROM diaries WHERE 
                  user_id = $1 AND 
                  (diary_id = $2 AND 
                    diary_deleted is NULL)`;
      let param = [userId,diaryId];

      return dbModels.pool.query(sql, param);
  }
  
  editADiary(id, paramId, req, res) {
      const user_id = id;
      const diary_title = req.body.diary_title;
      const diary_body = req.body.diary_content;
      const diary_image = res.locals.fileName;
      const date_updated = new Date;

    const sql = `UPDATE diaries SET 
                  diary_title = $1,
                  diary_content = $2,
                  diary_image = $3,
                  date_updated =$4
                  WHERE user_id = $5 AND 
                  diary_id =$6 RETURNING *;
                  ` ;
    let param = [diary_title, diary_body, diary_image, date_updated, user_id, paramId];
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
