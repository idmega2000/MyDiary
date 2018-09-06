import { Pool } from 'pg';
import dotenv from 'dotenv';
import events from 'events';
dotenv.config();

const user_info = `CREATE TABLE IF NOT EXISTS users
(user_id SERIAL PRIMARY KEY NOT NULL, 
  user_image VARCHAR,
  user_email VARCHAR(50) not null UNIQUE, 
  user_password VARCHAR(100) not null, 
  user_name VARCHAR(60))`;

const user_diary = `CREATE TABLE IF NOT EXISTS diaries( 
      diary_id SERIAL PRIMARY KEY NOT NULL,
      user_id int REFERENCES users(user_id), 
      diary_title VARCHAR(80), 
      diary_image VARCHAR,
      diary_content VARCHAR,  
      date_created TIMESTAMP, 
      date_updated TIMESTAMP,
      diary_deleted BOOLEAN)`;

const user_reminder = `CREATE TABLE IF NOT EXISTS 
      reminder( reminder_id SERIAL PRIMARY KEY NOT NULL,
          user_id int REFERENCES users(user_id), 
          reminder_title VARCHAR(80), 
          reminder_content VARCHAR,  
          reminder_date_created TIMESTAMP, 
          reminder_set_date TIMESTAMP)`;
export let em = new events.EventEmitter();
let connectionString = '';

if (process.env.NODE_ENV === 'test') {
    connectionString = process.env.TEST_DB_URL;
}
else {
    connectionString = process.env.DATABASE_URL || process.env.LOCAL_DB_URL;
}



class DbModel {

    constructor() {
        this.pool = new Pool({ connectionString });
    }
    createAllTables() {


        this.pool.query(user_info)
            .then(() => {
                this.pool.query(user_diary);
            })
            .then(() => {
                this.pool.query(user_reminder)
            })
            .then(() => {
                console.log('table now available or Created successfully');
                em.emit('databaseStarted');
            })
            .catch((error) => {
                console.log(error)
            })
    }
    app_Connect() {

        this.pool.connect()
            .then(() => {
                console.log('connected to database');
                console.log(process.env.NODE_ENV);
                if (process.env.NODE_ENV === 'test') {
                    this.appDelete();
                }
                else {
                    this.createAllTables();
                }

            })
            .catch((error) => {
                console.log(`this is the error ${error}`);
            })
    }

    appDelete() {

        const delete_talble_user = `DROP TABLE IF EXISTS diaries; DROP TABLE IF EXISTS reminder; DROP TABLE IF EXISTS users;`;

        this.pool.query(delete_talble_user)
            .then(() => {
                console.log('Tables Deleted successfully');
                this.createAllTables();


            })

    }
}
export default DbModel;


