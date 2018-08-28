import express from 'express';
import UserAuth from '../controllers/authcontroller';
import {signupUserExist} from '../middleware/authmw';
import { signUpValidator , signInValidation } from '../helpers/authvalidator';

const router = express.Router();

const user_auth = new UserAuth;



router.get('/signup', (req , res) => {
 return res.send({message: 'Welcome'});
});

router.post('/signup',signUpValidator , signupUserExist, user_auth.createUser);
router.post('/login', signInValidation , user_auth.signInUser);

export default router;

