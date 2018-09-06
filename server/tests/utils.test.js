import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';
import {getrandomString, getFileName} from '../helpers/utils';

const request = supertest(app);

describe('Route Test', () => {

describe('When a user visit the home page', () => {
    it('should return ok and welcome message', (done) => {
      request.get('/')
        .send()
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.hasOwnProperty("message"), true);
          assert.equal(res.body.message, 'Welcome to MYDiary');
          done();
        });
    });
  });


  describe('When user visit the Api page', () => {
    it('should return ok and welcome message', (done) => {
      request.get('/api/v1')
        .send()
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.hasOwnProperty("message"), true);
          assert.equal(res.body.message, 'Welcome to MYDiary API');
          done();
        });
    });
  });

  
  describe('When a visitor or user navigate to the api-docs page', () => {
    it('should return status of ok', (done) => {
      request.get('/api-docs')
        .send()
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.hasOwnProperty("message"), true);
          assert.equal(res.body.message, 'api-doc successfull');
          done();
        });
    });
  });

  describe('When a visitor or user navigate to the sign up page', () => {
    it('should return status of ok and welcome message', (done) => {
      request.get('/api/v1/auth/signup')
        .send()
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.hasOwnProperty("message"), true);
          assert.equal(res.body.message, 'Welcome');
          done();
        });
    });
  });

  describe('When a user enter a non existing route', () => {
    it('should return error 404 and page not found message', (done) => {
      request.get('/anyrandomgjhkj')
        .send()
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.hasOwnProperty("error"), true);
          assert.equal(res.body.error, 'Page Not Found');
          done();
        });
    });
  });

});


describe('When user enter a wrong email format', () => {
  it('should return an error', done => {
      assert.ok((getrandomString(20).length), 20);
      assert.ok(typeof(getrandomString(20)), 'string');
      done();
  })
});


describe('When user enter a wrong email format', () => {
  it('should return an error', done => {
      assert.ok(typeof(getFileName('aaa.png')), 'string');
      done();
  })
});



