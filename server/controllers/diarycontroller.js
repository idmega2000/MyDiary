import { allDiaryData } from '../model/userdata';
import { getId } from '../utils/default';
// for reminders


export const allDiaries = (req, res) => {
  res.send(allDiaryData.diaries);
};

