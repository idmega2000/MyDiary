import express from 'express';

const router = express.Router();


// Require controller modules.
const api_controller = require('../controllers/diarycontroller');

router.get('/app/v1/entries', api_controller.allDiaries);
router.get('/app/v1/entries/:id', api_controller.getADiary);
router.post('/app/v1/entries/', api_controller.postDiary);
router.put('/app/v1/entries/:id', api_controller.editDiary);
router.delete('/app/v1/entries/:id', api_controller.deleteDiary);


export default router;
