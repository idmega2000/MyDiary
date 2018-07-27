import chai from "chai";
import supertest from "supertest";
import {app} from '../../app';
import assert from 'assert';


var request = supertest(app);
const { expect } = chai;
const path = "/api/v1/entries";

// all entries test
describe("Select all entries", function() {
    it("select all entires", function(done) {
      request.get(path).end( (req, res) => {
        assert.equal(res.status, 200);
        done();
      });
    });

    it("test if return is an object", function(done) {
      request.get(path).end( (req, res) => {
        assert.equal(typeof res.body, "object");
      done();
      });
    });
});


//selected entries test
describe("Select an entry", function() {
  it("test if return is an object", function(done) {
    request.get(`${path}/anytest`).send().end( (req, res) => {
      assert.equal(typeof res.body, "object");
      done();

      });
  });

  it("test if selected is not found", function(done) {
    request.get(`${path}/anytest`).send().end( (req, res) => {
      assert.equal(res.body.message, "Entry not found!");
      assert.equal(res.statusCode, 404);
      done();

      });
  });

  
});


//deleted entries test

describe("Delete an entry", function() {
  it("test if return is an object", function(done) {
    request.delete(`${path}/anytest`).send().end( (req, res) => {
      assert.equal(typeof res.body, "object");
      done();

      });
  });

  it("test if selected is not found", function(done) {
    request.delete(`${path}/anytest`).send().end( (req, res) => {
      assert.equal(res.body.message, "Entry not found!");
      assert.equal(res.statusCode, 404);
      done();

      });
  });

  
});

//create an entry
describe("Create an entry", function() {
  const test_data = {
    "diary_date": "24/04/2089",
    "diary_title": "the way of music",
    "diary_body": "music is a very nice thing to listen to",
    "diary_img_url": "www.bemyfriend.com"
}

  it("test if return is an object", function(done) {
    request.post(`${path}/`).send(test_data).end( (req, res) => {
      assert.equal(typeof res.body, "object");
      done();

      });
  });
  it("test if object is created successfully", function(done) {
    request.post(`${path}/`).send(test_data).end( (req, res) => {
      assert.equal(res.statusCode, 201);
      done();

      });
  });

  it("test for empty object input", function(done) {
    request.post(`${path}/`).send({}).end( (req, res) => {
      assert.equal(res.statusCode, 404);
      done();
      });
  }); 

});


describe("modify and update an entry", function() {
  const test_data = {
    "diary_id": 'qhxdhhoy1o'
}

  it("test if return is an object", function(done) {
    request.put(`${path}/${test_data[0]}`).send().end( (req, res) => {
      assert.equal(typeof res.body, "object");
      done();

      });
  });

  it("test if selected is found", function(done) {
    request.put(`${path}/${test_data[0]}`).send().end( (req, res) => {
      assert.equal(res.statusCode, 404);
      done();
      });
  });  
});

//got some helpful resources from http://willi.am/node-mocha-supertest/