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
        
          const user_info = `CREATE TABLE IF NOT EXISTS users(user_id int PRIMARY KEY NOT NULL, 
            user_email varchar(30) not null UNIQUE, user_password varchar(30) not null, user_name varchar(40))`;

            const diary_entries = `CREATE TABLE IF NOT EXISTS diaries( diary_id int PRIMARY KEY NOT NULL,
                user_id int REFERENCES users(user_id), diary_title varchar(80), 
                diary_content varchar,  date_created TIMESTAMP, date_updated TIMESTAMP)`;

        Promise.all([this.pool.query(diary_entries), this.pool.query(user_info)])
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


