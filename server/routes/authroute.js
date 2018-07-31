import express from 'express';

import Diary from '../controllers/authcontroller';

const router = express.Router();


router.get('/api/v1/signup', diary.allDiaries);