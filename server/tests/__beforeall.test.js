import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';
import { em } from '../models/dbhconnect';
import events from 'events';

export let cretedEmitter = new events.EventEmitter();


const request = supertest(app);
const path = '/api/v1/auth';

const start_user = {
  user_name: 'idris',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andela'
}

before(function (done) {
  this.timeout(8000);

  em.on('databaseStarted', () => {
    //load a user into the database for test use
    request.post(path + '/signup')
      .send(start_user)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        assert.equal(res.statusCode, 201);
        done();
      });
  });
});
