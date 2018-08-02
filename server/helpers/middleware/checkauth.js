import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

 const verifyToken = (req, res, next) => {
    

    //idea gotten from Academind youtube video.
    //https://www.youtube.com/watch?v=8Ip0pcwbWYM&index=13&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q;

    try{

        const token = req.headers.authorization.split(' ')[1];
        const decode_token = jwt.verify(token, process.env.JWT_KEY);
        next();
    }catch(err){
        console.log();
        res.status(401).json({message: 'Login to Access page'});
    }
}
export default verifyToken;