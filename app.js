import express from 'express';
import bodyParser from 'body-parser';
import allroutes from './server/routes/allroutes';
import DbModel from './server/models/dbhconnect';
import morgan from 'morgan';


const app = express();
const dbConnect = new DbModel;
dbConnect.Db_Connect();


const PORT = process.env.PORT || 5000

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(allroutes);
app.listen(PORT, () => console.log(`Listening on Port ${ PORT }`))

export default app ;
