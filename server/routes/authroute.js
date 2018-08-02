import express from 'express';
import UserAuth from '../controllers/authcontroller';
import {signupUserExist, signInUserNotEXist} from '../helpers/middleware/authmw'

const router = express.Router();

const user_auth = new UserAuth;



router.get('/signup', (req , res) => {
 return res.send({message: 'this is me'});
});

router.post('/signup', signupUserExist, user_auth.createUser);
router.post('/login', signInUserNotEXist, user_auth.signInUser);

export default router;

