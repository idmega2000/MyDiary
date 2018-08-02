import express from 'express';
import verifyToken from '../helpers/middleware/checkauth';
import Diary from '../controllers/diarycontroller';

const router = express.Router();
const diary = new Diary();


router.get('/', verifyToken, diary.allDiaries);
router.post('/', verifyToken, diary.postDiary);
router.get('/:id',verifyToken, diary.getADiary);
router.put('/:id', verifyToken, diary.editDiary);
router.delete('/:id', verifyToken, diary.deleteDiary);

export default router;
