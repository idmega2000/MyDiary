
import diaryModel from '../models/diarymodel';

const diary_model = new diaryModel;

class Diary {

  allDiaries(req, res) {

    diary_model.getAllDiaries(req.db_user_id)
      .then(result => {
        if (result.rowCount === 0) {
          return res.status(404).json({ error: 'Diary is Empty' });
        }
        else {
          return res.status(200).json({ message: 'All Diary Selected', diary: result.rows });
        }
      })
      .catch(err => {
        return res.status(500).json({ error: 'Failed' });
      })

  }

  getADiary(req, res) {
    diary_model.getSingleDiary(req.params.id, req.db_user_id)
      .then(result => {
        if (result.rowCount > 0) {
          return res.status(200).json({  message: 'Diary Selected Successfully', diary: result.rows[0] });
        }
        else {
          return res.status(404).json({ error: 'Diary not found' }); 
        }
      })
      .catch(err => {
        return res.status(500).json({ error: 'Select Diary Failed' });
      })
  }

  addDiary(req, res) {
    diary_model.addANewDiary(req.db_user_id, req, res)
      .then(result => {
        return res.status(201).json({ message: 'Diary Created Successfully', diary: result.rows[0] });
      })
      .catch(err => {
        return res.status(500).json({ error: 'Create Diary Failed' });

      })
  }

  editDiary(req, res) {

    diary_model.editADiary(req.db_user_id, req.params.id, req, res)
      .then(result => {
 
          return res.status(200).json({ message: 'Diary Updated Successfully', diary: result.rows[0]});
      })
      .catch(err => {
        return res.status(500).json({ error: 'Edit Diary Failed' });

      })


  }

  deleteDiary(req, res) {
    diary_model.deleteADiary(req.db_user_id, req.params.id)
      .then(result => {
        if(result.rowCount === 0){
          return res.status(404).json({error: 'Diary Not Found' });
        }
        else{
          return res.status(200).json({ message: 'Diary Deleted Successfully' });
        }   
      })
      .catch(err => {
        return res.status(500).json({ error: 'Delete Failed' });

      })

  }
}

export default Diary;
