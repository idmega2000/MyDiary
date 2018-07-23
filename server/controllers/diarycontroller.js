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
  