import { allDiaryData } from '../models/userdata';
import { getId } from '../utils/default';
import { InputErrors } from '../utils/validator';


export default class Diary {
  constructor (){
   
  }
  allDiaries (req, res) {
     // Empty Object
    if(!Object.keys(allDiaryData.diaries).length) {
      return ({ message: 'Diary is Empty'});
    } else {
      return res.status(200).json(allDiaryData.diaries);
    }
    
  };

  getADiary (req, res) {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    if (single_diary) {
      return res.status(200).json(single_diary);
    }
    return res.status(404).json({ message: 'Entry not found!' });
  };

  postDiary (req, res) {
    const check_error = InputErrors(req.body);
  
    if (check_error) {
      return res.status(404).json({ message: check_error });
    }
  
    const initial_index = allDiaryData.diaries.length;
    const new_id = getId();
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === new_id);
  
    if (!single_diary) {
      const new_input = {
        diary_id: getId(),
        diary_date: req.body.diary_date,
        diary_title: req.body.diary_title,
        diary_body: req.body.diary_body,
        diary_img_url: req.body.diary_img_url,
  
      };
  
      allDiaryData.diaries.push(new_input);
      const new_index = allDiaryData.diaries.length;
  
      if (new_index === (initial_index + 1)) {
        return res.status(201).json(new_input);
      }
      return res.status(400).json({ message: 'Bad Request' });
    }
    return res.status(404).json({ message: 'Entry id already exist' });
  };

  editDiary (req, res) {
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
  };

  deleteDiary (req, res) {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    const index = Object.keys(allDiaryData.diaries).indexOf(single_diary);
    allDiaryData.diaries.splice(index, 1);
    if (single_diary) {
      return res.status(200).json(allDiaries.diaries);
    }
    return res.status(404).json({ message: 'Entry not found!' });
  };

}














