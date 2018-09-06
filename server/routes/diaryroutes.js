import express from 'express';
import verifyToken from '../middleware/checkauth';
import Diary from '../controllers/diarycontroller';
import isEditable from '../middleware/editcheck';
import { dairyInput, singleGetValidator } from '../helpers/diaryvalidator';
import {uploadImage} from '../middleware/uploaadimage';
import multer from 'multer';

/*
const upload = multer({
    limits: {
        fileSize: 1024,
    }
}); */
const upload = multer({});



const router = express.Router();
const diary = new Diary();


router.get('/', verifyToken, diary.allDiaries);
router.post('/', verifyToken, upload.any(), dairyInput , uploadImage, diary.addDiary);
router.get('/:id',verifyToken, singleGetValidator , diary.getADiary);
router.put('/:id', verifyToken, upload.any(), singleGetValidator, isEditable, dairyInput, uploadImage, diary.editDiary);
router.delete('/:id', verifyToken, singleGetValidator, diary.deleteDiary);

export default router;
