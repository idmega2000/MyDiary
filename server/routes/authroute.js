import express from 'express';

import UserAuth from '../controllers/authcontroller';
const router = express.Router();

const user_auth = new UserAuth;


router.get('/signup', (req , res) => {
 return res.send({message: 'this is me'});
});
router.post('/signup', user_auth.createUser);
//router.post('/login', auth_model.userSignin);

export default router;

