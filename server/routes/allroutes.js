
import express from 'express';
import authrouter from './authroute';
import diaryrouter from './diaryroutes';
import signupUserExist from '../helpers/midleware/signupmid'


import UserAuth from '../controllers/authcontroller';
const user_auth = new UserAuth;
const router = express.Router();
router.get('/api/v1/auth/signup', (req, res) => {
    return res.send({message: 'i am here now'});
})

router.use( '/api/v1/auth/signup', signupUserExist , user_auth.createUser);
router.use('api/v1/entries', diaryrouter);

export default router;

