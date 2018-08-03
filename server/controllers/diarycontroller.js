import { allDiaryData } from '../models/userdata';
import { dairyInput, singleGetValidator} from '../helpers/diaryvalidator';
import diaryModel from '../models/diarymodel';

const diary_model = new diaryModel;

 class Diary {
  
  allDiaries(req, res) {

    diary_model.getAllDiaries(req.db_user_id)
    .then(result => {
      if (result.rowCount === 0){
        console.log(result);
        return res.status(404).json({ message: 'Diary is Empty'});
    }
    else{
      console.log(result.rows);
      return res.status(200).json({ message: result.rows});
    }
    })
    .catch(err => {
      console.log(err);
    })

  }

  getADiary(req, res) {

    console.log(req.db_user_id);
    console.log(req.params.id);

    const errorHandler = singleGetValidator( req.params.id);
    
    if(errorHandler){
      return res.status(400).json({message: errorHandler});
    }
    diary_model.getSingleDiary(req.params.id, req.db_user_id)
    .then(result => {
      if(result.rowCount >0){
        return res.status(200).json({ message: result.rows});
      }
      else{
        return res.status(404).json({ message: 'not found'});
      }
    })
    .catch(err => {
      return res.status(404).json({ message: 'not found'});
    })
  }

  addDiary(req, res) {
     const diary_input = dairyInput(req.body);
     if(diary_input){
       return diary_input;
     }
     diary_model.addANewDiary(req.db_user_id, req.body)
     .then( result => {
      return res.status(201).json({message: 'Diary Created successfully', diary: result.rows});
     })
     .catch(err => {
      console.log(err);
      return res.status(404).json({message: 'A problem occured'});
       
     })
  }


  editDiary(req, res) {

    const errorHandler = singleGetValidator( req.params.id);
    
    if(errorHandler){
      return res.status(400).json({message: errorHandler});
    }


    const check_error = dairyInput(req.body);
    if (check_error) {
      return res.status(404).json({ check_error });
    }

    diary_model.editADiary(req.db_user_id, req.params.id, req.body)
    .then( result => {
     return res.status(201).json({message: 'Diary Updated successfully', diary: result.rows});
    })
    .catch(err => {
     console.log(err);
     return res.status(404).json({message: 'A problem occured'});
      
    })


  } 

  deleteDiary(req, res) {
    const errorHandler = singleGetValidator( req.params.id);
    
    if(errorHandler){
      return res.status(400).json({message: errorHandler});
    }

    diary_model.deleteADiary(req.db_user_id, req.params.id)
    .then( result => {
     return res.status(201).json({message: 'Diary Deleted successfully'});
    })
    .catch(err => {
     console.log(err);
     return res.status(404).json({message: 'A problem occured'});
      
    })

  }
}

export default Diary;
