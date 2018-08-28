import DbModels from "../models/dbhconnect";

let dbModels = new DbModels;



let isEditable = (req, res, next) => {

    let db_user_id = req.db_user_id;
    let input_diary_id = req.params.id;
    let current_date = new Date();

    const sql = `SELECT * FROM diaries WHERE user_id = $1 AND (diary_id = $2)`;

    let param = [db_user_id, input_diary_id];
    dbModels.pool.query(sql, param)
    .then(result => {
        if(result.rowCount < 1){
            return res.status(404).json({error: 'Diary Not Found'});
        }
        themainEdit(db_user_id,input_diary_id, current_date, next);
    })
    .catch(err =>{
        console.log(err, err)
        return res.status(403).json({error: 'You cannot edit this diary content'});
    });

    let themainEdit = (db_user_id,input_diary_id, current_date, next) => {
    
        const date_sql = `SELECT * FROM diaries WHERE user_id = $1 AND (diary_id = $2 AND date_created > $3 ::date - interval '1 day')`;
        let param2 = [db_user_id, input_diary_id, current_date];
        dbModels.pool.query(date_sql, param2)
    .then(result => {
        if(result.rowCount > 0){
            next();
        }
        else {
            return res.status(403).json({error: 'You cannot edit this diary content'});
        }
    })
    .catch(err =>{
        console.log(err);
    })


}



}

export default isEditable;