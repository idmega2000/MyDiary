import { allDiaryData } from '../models/userdata';
import { getId } from '../utils/default';
import {InputErrors} from '../utils/validator';


export const allDiaries = (req, res) => {
  res.send(allDiaryData.diaries);
};

export const getADiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    if(single_diary){
      return res.status(200).json(single_diary)
    }else{
      return res.status(404).json({ message: "Entry not found!"});
    }
    
  };

  export const postDiary = (req, res) => {
     
    let check_error = InputErrors(req.body);
  
    if (check_error){
      return res.status(404).json({ message: check_error});   
    }

    let initial_index = allDiaryData.diaries.length;
    const new_id = getId();
    let single_diary = allDiaryData.diaries.find(item => item.diary_id === new_id);

    if(!single_diary){
      let new_input = {
        diary_id: getId(), 
        diary_date: req.body.diary_date,
        diary_title: req.body.diary_title, 
        diary_body: req.body.diary_body, 
        diary_img_url: req.body.diary_img_url
        
      };
      
      
      allDiaryData.diaries.push(new_input);
      let new_index = allDiaryData.diaries.length;

      if (new_index === (initial_index + 1) ){
        return res.status(201).json(new_input);
      }else {
        return res.status(400).json({ message: "Bad Request"});
      } 
    }else {
      return res.status(404).json({ message: "Entry id already exist"});
    }
    
  };
  

  export const editDiary = (req, res) => {
    let check_error = InputErrors(req.body); 
    if (check_error){
      return res.status(404).json({check_error});   
    }
    const data = req.params.id;
    let single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    if (single_diary){
      single_diary.diary_date = req.body.diary_date;
      single_diary.diary_title = req.body.diary_title;
      single_diary.diary_body = req.body.diary_body;
      single_diary.diary_img_url = req.body.diary_img_url;
      return res.status(200).json(single_diary)
    }else{
      return res.status(404).json({ message: "Entry not found!"});
    }
 
  };

  export const deleteDiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    const index = Object.keys(allDiaryData.diaries).indexOf(single_diary);
    allDiaryData.diaries.splice(index, 1);
    if(single_diary){
      return res.status(200).json(allDiaryData.diaries);
    }else{
      return res.status(404).json({ message: "Entry not found!"});
    }
  };