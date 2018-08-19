
import express from 'express';
import authroute from './authroute';
import diaryrouter from './diaryroutes';


const router = express.Router();
router.get("/", (req, res) => {
    return res.send({message: 'Welcome to MYDiary'});
})
router.get("api/v1", (req, res) => {
    return res.send({message: 'Welcome to MYDiary'});
})

router.use("/api/v1/auth/" , authroute );
router.use("/api/v1/entries/" , diaryrouter);

export default router;

