import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/diaryroutes';

const app = express();

// holds the port number. change whatever port to this
const port = 3000;
const host_name = 'localhost';
const base_url = `http://${host_name}:${port}/`;


app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(router);
app.listen(process.env.PORT || 5000)

export { app };
