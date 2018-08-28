import express from 'express';
import verifyToken from '../middleware/checkauth';
import Diary from '../controllers/diarycontroller';
import isEditable from '../middleware/editcheck';
import { dairyInput, singleGetValidator } from '../helpers/diaryvalidator';


const router = express.Router();
const diary = new Diary();


router.get('/', verifyToken, diary.allDiaries);
router.post('/', verifyToken, dairyInput , diary.addDiary);
router.get('/:id',verifyToken, singleGetValidator , diary.getADiary);
router.put('/:id', verifyToken, singleGetValidator, isEditable, dairyInput, diary.editDiary);
router.delete('/:id', verifyToken, singleGetValidator, diary.deleteDiary);

export default router;
