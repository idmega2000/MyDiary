import { InputErrors } from '../helpers/validator';
import AuthModel from '../models/authmodel';

const auth_model  = new AuthModel;


class UserAuth {
    
    createUser(req, res) {
      auth_model.userSignup(req.body)
      .then(()=>{
        return res.status(201).json({message: 'Data inserted successfully'});
      }).catch((err) =>{
          return res.status(400).json(console.log(err));
      })
    }
  
  }


  export default UserAuth;
  