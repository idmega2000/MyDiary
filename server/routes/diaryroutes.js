import express from 'express';

import Diary from '../controllers/diarycontroller';

const router = express.Router();
let diary = new Diary();

router.get('/api/v1/entries', diary.allDiaries);
router.get('/api/v1/entries/:id', diary.getADiary);
router.post('/api/v1/entries/', diary.postDiary);
router.put('/api/v1/entries/:id', diary.editDiary);
router.delete('/api/v1/entries/:id', diary.deleteDiary);

export default router;
