import express from 'express';
import verifyToken from '../middleware/checkauth';
import Diary from '../controllers/diarycontroller';
import isEditable from '../middleware/editcheck';


const router = express.Router();
const diary = new Diary();


router.get('/', verifyToken, diary.allDiaries);
router.post('/', verifyToken, diary.addDiary);
router.get('/:id',verifyToken, diary.getADiary);
router.put('/:id', verifyToken, isEditable, diary.editDiary);
router.delete('/:id', verifyToken, diary.deleteDiary);

export default router;
