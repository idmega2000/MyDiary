import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();


const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DB_URL;

class DbModel {
    
    constructor(){
        this.pool = new Pool({connectionString});
    }
    createAllTables(){
        console.log('i am here');
        
          const user_info = `CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY NOT NULL, user_image bytea,
            user_email varchar(50) not null UNIQUE, user_password varchar(100) not null, user_name varchar(60))`;

            const diary_diaries = `CREATE TABLE IF NOT EXISTS diaries( diary_id int PRIMARY KEY NOT NULL,
                user_id int REFERENCES users(user_id), diary_title varchar(80), diary_image bytea,
                diary_content varchar,  date_created TIMESTAMP, date_updated TIMESTAMP)`;

                const reminder_feature = `CREATE TABLE IF NOT EXISTS reminder( reminder_id int PRIMARY KEY NOT NULL,
                    user_id int REFERENCES users(user_id), reminder_title varchar(80), 
                    reminder_content varchar,  reminder_date_created TIMESTAMP, reminder_set_date TIMESTAMP)`;

        Promise.all([this.pool.query(user_info), this.pool.query(diary_diaries), this.pool.query(reminder_feature)])
        .then( () =>{
                console.log('table created');
        })
        .catch((error) =>{
            console.log(error)
        })
        }
        Db_Connect(){

            this.pool.connect()
            .then(() =>{
                console.log('connected to database');
                this.createAllTables();
            })
            .catch((error)=>{
                console.log(`this is the error ${error}`);
            })
        }   
}
export default DbModel;


