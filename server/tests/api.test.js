
import supertest from 'supertest';
import assert from 'assert';
import { app } from '../../app';


const request = supertest(app);
const path = '/api/v1/entries';

// all entries test
describe('Select all entries', () => {
  it('select all entires', (done) => {
    request.get(path).end((req, res) => {
      assert.equal(res.status, 200);
      done();
    });
  });

  it('test if return is an object', (done) => {
    request.get(path).end((req, res) => {
      assert.equal(typeof res.body, 'object');
      done();
    });
  });
});


// selected entries test
describe('Select an entry', () => {
  it('test if return is an object', (done) => {
    request.get(`${path}/anytest`).send().end((req, res) => {
      assert.equal(typeof res.body, 'object');
      done();
    });
  });

  it('test if selected is not found', (done) => {
    request.get(`${path}/anytest`).send().end((req, res) => {
      assert.equal(res.body.message, 'Entry not found!');
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});


// deleted entries test

describe('Delete an entry', () => {
  it('test if return is an object', (done) => {
    request.delete(`${path}/anytest`).send().end((req, res) => {
      assert.equal(typeof res.body, 'object');
      done();
    });
  });

  it('test if selected is not found', (done) => {
    request.delete(`${path}/anytest`).send().end((req, res) => {
      assert.equal(res.body.message, 'Entry not found!');
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});

// create an entry
describe('Create an entry', () => {
  const test_data = {
    diary_date: '24/04/2089',
    diary_title: 'the way of music',
    diary_body: 'music is a very nice thing to listen to',
    diary_img_url: 'www.bemyfriend.com',
  };

  it('test if return is an object', (done) => {
    request.post(`${path}/`).send(test_data).end((req, res) => {
      assert.equal(typeof res.body, 'object');
      done();
    });
  });
  it('test if object is created successfully', (done) => {
    request.post(`${path}/`).send(test_data).end((req, res) => {
      assert.equal(res.statusCode, 201);
      done();
    });
  });

  it('test for empty object input', (done) => {
    request.post(`${path}/`).send({}).end((req, res) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});


describe('modify and update an entry', () => {
  const test_data = {
    diary_id: 'qhxdhhoy1o',
  };

  it('test if return is an object', (done) => {
    request.put(`${path}/${test_data[0]}`).send().end((req, res) => {
      assert.equal(typeof res.body, 'object');
      done();
    });
  });

  it('test if selected is found', (done) => {
    request.put(`${path}/${test_data[0]}`).send().end((req, res) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});

// got some helpful resources from http://willi.am/node-mocha-supertest/
