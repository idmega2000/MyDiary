import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/diaryroutes';
import DbModel from './server/models/dbhconnect';

const app = express();
const dbConnect = new DbModel;
dbConnect.Db_Connect();


const PORT = process.env.PORT || 5000


app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(router);
app.listen(PORT, () => console.log(`Listening on Port ${ PORT }`))

export { app };
