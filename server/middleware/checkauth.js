import jwt from 'jsonwebtoken';

    const verifyToken = (req, res, next) => {
        const bearerheader = req.headers['authorization'];
        if(typeof bearerheader !== 'undefined'){
            const bearer_token = bearerheader.split(' ')[1];
            if(bearer_token){
                jwt.verify(bearer_token, process.env.JWT_KEY, (err, decoded) => {
                    if(err){
                        res.sendStatus(403);
                    }
                    else{
                        req.db_user_id = decoded.user_id;
                        req.db_user_email = decoded.user_email;
                        console.log(bearer_token);
                        next();
                    }

                })
               
            }
           
        }
        else{
            return res.status(403).json({message: 'Unauthorized'});
        }
    }


export default verifyToken;