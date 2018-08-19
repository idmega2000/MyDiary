
import { dairyInput, singleGetValidator } from '../helpers/diaryvalidator';
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
          return res.status(200).json({ diary: result.rows });
        }
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({ error: 'Failed' });
      })

  }

  getADiary(req, res) {

    const errorHandler = singleGetValidator(req.params.id);

    if (errorHandler) {
      return res.status(400).json({ error: errorHandler });
    }
    diary_model.getSingleDiary(req.params.id, req.db_user_id)
      .then(result => {
        if (result.rowCount > 0) {
          return res.status(200).json({ diary: result.rows[0] });
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
    const diary_input = dairyInput(req.body);
    if (diary_input) {
      return res.status(400).json({ error: diary_input });
    }
    diary_model.addANewDiary(req.db_user_id, req.body)
      .then(result => {
        return res.status(201).json({ message: 'Diary Created successfully', diary: result.rows[0] });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({ error: 'Create Diary Failed' });

      })
  }

  editDiary(req, res) {

    const errorHandler = singleGetValidator(req.params.id);

    if (errorHandler) {
      return res.status(400).json({ error: errorHandler });
    }

    const check_error = dairyInput(req.body);
    if (check_error) {
      return res.status(400).json({error: check_error });
    }

    diary_model.editADiary(req.db_user_id, req.params.id, req.body)
      .then(result => {
        if(result.rowCount === 0){
          return res.status(404).json({error: 'Diary not found' });
        }
        else{
          return res.status(200).json({ message: 'Diary Updated successfully', diary: result.rows[0]});
        }
        
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({ error: 'Edit Diary Failed' });

      })


  }

  deleteDiary(req, res) {
    const errorHandler = singleGetValidator(req.params.id);

    if (errorHandler) {
      return res.status(400).json({ error: errorHandler });
    }

    diary_model.deleteADiary(req.db_user_id, req.params.id)
      .then(result => {
        if(result.rowCount === 0){
          return res.status(404).json({error: 'Diary not found' });
        }
        else{
          return res.status(200).json({ message: 'Diary Deleted successfully' });
        }   
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({ error: 'Edit Failed' });

      })

  }
}

export default Diary;
