import bcrypt from "bcrypt";
import AuthModel from '../models/authmodel';
import jwt from 'jsonwebtoken';

const auth_model = new AuthModel;


class UserAuth {

  createUser(req, res) {
    auth_model.userSignup(req.body)
      .then(result => {
        const token = jwt.sign({
          user_id: result.rows[0].user_id,
          user_email: result.rows[0].user_email
        }, process.env.JWT_KEY)
        return res.status(201).json({ message: 'Registration Successful', token: token });
      }).catch((err) => {
        return res.status(400).json(console.log(err));
      })
  }
  
  signInUser(req, res) {
    auth_model.userSignIn(req.body)
      .then(result => {
        if (result.rowCount === 0) {
          return res.status(404).json({ error: 'User does not exist!' });
        }
        else {
          if (bcrypt.compareSync(req.body.user_password, result.rows[0].user_password)) {
            const token = jwt.sign({
              user_id: result.rows[0].user_id,
              user_email: result.rows[0].user_email
            }, process.env.JWT_KEY)
            return res.status(200).json({ message: 'Login Successful', token: token });

          }
          else {
            return res.status(400).json({ error: 'invalid password' });
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })


  }

}


export default UserAuth;
