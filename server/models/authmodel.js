import bcrypt from "bcrypt";
import DbModels from "./dbhconnect";


class AuthModel extends DbModels {
  constructor () {
    super();
  }

  userSignup(data) {

    const salt = bcrypt.genSaltSync(10);
    const hash_password = bcrypt.hashSync(data.user_password, salt);
    const sql = `INSERT INTO users(user_email, user_password, user_name) VALUES ($1, $2, $3) RETURNING *`;
    let params = [data.user_email, hash_password, data.user_name];
    return this.pool.query(sql, params);

  }

  userSignIn(data) {
    let input_email = data.user_email;
    const email_sql = `select * from users where user_email = $1`;
    let param = [input_email];
    return this.pool.query(email_sql, param);

  }

}
export default AuthModel;





