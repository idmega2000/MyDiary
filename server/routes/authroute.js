import express from 'express';
import UserAuth from '../controllers/authcontroller';
import {signupUserExist, signInUserInputVal} from '../middleware/authmw'

const router = express.Router();

const user_auth = new UserAuth;



router.get('/signup', (req , res) => {
 return res.send({message: 'welcome'});
});

router.post('/signup', signupUserExist, user_auth.createUser);
router.post('/login', signInUserInputVal, user_auth.signInUser);

export default router;

