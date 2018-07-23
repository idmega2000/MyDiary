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
  

  export const editDiary = (req, res) => {
    const data = req.params.id;
    const single_diary = allDiaryData.diaries.find(item => item.diary_id === data);
    single_diary.title = req.body.diary_title;
    single_diary.body = req.body.diary_body;
    single_diary.img_url = req.body.img_url;
    res.send(allDiaryData.diaries);
  };