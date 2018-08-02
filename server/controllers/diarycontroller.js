import { allDiaryData } from '../models/userdata';
import { dairyInput } from '../helpers/diaryvalidator';
import diaryModel from '../models/diarymodel';

const diary_model = new diaryModel;


export default class Diary {
  allDiaries(req, res) {

    diary_model.getAllDiaries(req.db_user_id)
    .then(result => {
      if (result.rowCount === 0){
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

    diary_model.getADiary()
    .then(result => {
      if(result.rowCount>0){
        return result.rows;
      }
      else{
        return res.status(404).json({ message: 'not found'});
      }
    })
    .then(err => {
      return res.status(404).json({ message: 'not found'});
    })
  }

  addDiary(req, res) {
     const diary_input = dairyInput(req.body);
     if(diary_input){
       return diary_input;
     }
     diary_model.addANewDiary(req.db_user_id, req.body)
     .then( () => {
      return res.status(201).json({message: 'Diary Created successfully'});
     })
     .catch(err => {
      console.log(err);
      return res.status(404).json({message: 'A problem occured'});
       
     })
  }


  editDiary(req, res) {
    const check_error = InputErrors(req.body);
    if (check_error) {
      return res.status(404).json({ check_error });
    }
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    if (single_diary) {
      single_diary.diary_date = req.body.diary_date;
      single_diary.diary_title = req.body.diary_title;
      single_diary.diary_body = req.body.diary_body;
      single_diary.diary_img_url = req.body.diary_img_url;
      return res.status(200).json(single_diary);
    }
    return res.status(404).json({ message: 'Entry not found!' });
  }

  deleteDiary(req, res) {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    const index = Object.keys(allDiaryData.diaries).indexOf(single_diary);
    allDiaryData.diaries.splice(index, 1);
    if (single_diary) {
      return res.status(200).json(allDiaries.diaries);
    }
    return res.status(404).json({ message: 'Entry not found!' });
  }
}
