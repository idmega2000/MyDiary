import express from 'express';

import {
  allDiaries, getADiary, postDiary, editDiary, deleteDiary,
} from '../controllers/diarycontroller';

const router = express.Router();


router.get('/api/v1/entries', allDiaries);
router.get('/api/v1/entries/:id', getADiary);
router.post('/api/v1/entries/', postDiary);
router.put('/api/v1/entries/:id', editDiary);
router.delete('/api/v1/entries/:id', deleteDiary);


export default router;
