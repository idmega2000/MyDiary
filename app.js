import express from 'express';
import bodyParser from 'body-parser';
import allroutes from './server/routes/allroutes';
import DbModel from './server/models/dbhconnect';
import morgan from 'morgan';


const app = express();
export default app ;

app.disable('x-powered-by');

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));


app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

const dbConnect = new DbModel;

dbConnect.app_Connect();



app.use(allroutes);
app.listen(PORT, () => console.log(`Listening on Port ${ PORT }`))

 




