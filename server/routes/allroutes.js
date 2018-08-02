
import express from 'express';
import authroute from './authroute';
import diaryrouter from './diaryroutes';

const loc_path = "/api/v1";



const router = express.Router();

router.get(loc_path, (req, res) => {
    return res.send({message: 'i am here now'});
})

router.use( loc_path + "/auth/" , authroute );
router.use(loc_path + "/entries", diaryrouter);

export default router;

