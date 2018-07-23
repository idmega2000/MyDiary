import { allDiaryData } from '../model/userdata';
import { getId } from '../utils/default';
// for reminders


export const allDiaries = (req, res) => {
  res.send(allDiaryData.diaries);
};

export const getADiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    res.send(single_diary);
  };

  export const postDiary = (req, res) => {
    const new_input = {
      diary_id: getId(), diary_date: (new Date()).toString(), 
      diary_title: req.body.diary_title, diary_body: req.body.diary_body, diary_img_url: req.body.diary_img_url,
    };
    allDiaryData.diaries.push(new_input);
    res.send(allDiaryData.diaries);
  };
  

  export const editDiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    single_diary.title = req.body.diary_title;
    single_diary.body = req.body.diary_body;
    single_diary.img_url = req.body.img_url;
    res.send(allDiaryData.diaries);
  };

  export const deleteDiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    const index = Object.keys(allDiaryData.diaries).indexOf(single_diary);
    allDiaryData.diaries.splice(index, 1);
    res.send(allDiaryData.diaries);
  };