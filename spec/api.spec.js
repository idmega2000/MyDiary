import {request} from "request";
import { base_url} from "../app";

let entries_path = "${base_url}/app/v1/entries"

describe("application server", function() {
    const diary_data = {
        diary_id : 'goal',
        diary_date: '23/02/2019',
        diary_title: '',
        diary_body: '',
        diary_img_url: ''
      };
    describe("GET all enties", function() {
      it("check if server is active and returns status code 200", function(done) {
        request.get(entries_path, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });

      it("check if an object is returned", function(done) {
        request.get(entries_path, function(error, response, body) {
          expect(response.statusCode).toBe(typeof res, "object");
          done();
        });
      });


    });


    describe("get single entry", function() {
        it("check if should return status 404", function(done) {
          request.get(entries_path + '/anytext', function(error, response, body) {
            expect(response.statusCode).toBe(400);
            done();
          });
        });
  
        it("check if an object is returned", function(done) {
          request.get(entries_path, function(error, response, body) {
            expect(response.statusCode).toBe(typeof res, "object");
            done();
          });
        });
  
  
      });


      describe("create new diary entry", function() {
        it("check if return the post is successful and return 200 received", function(done) {
          request.post(diary_data, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
  
        it("check if an object is returned", function(done) {
          request.get(entries_path, function(error, response, body) {
            expect(response.statusCode).toBe(typeof JSON.parse(res.text), "object");
            done();
          });
        });
  
  
      });


      describe("GET /", function() {
        it("check if server is active and returns status code 200", function(done) {
          request.get(entries_path, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
  
        it("check if an object is returned", function(done) {
          request.get(baseentries_path_url, function(error, response, body) {
            expect(response.statusCode).toBe(typeof JSON.parse(res.text), "object");
            done();
          });
        });
  
  
      });


      describe("GET /", function() {
        it("check if server is active and returns status code 200", function(done) {
          request.get(entries_path, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
  
        it("check if an object is returned", function(done) {
          request.get(entries_path, function(error, response, body) {
            expect(response.statusCode).toBe(typeof JSON.parse(res.text), "object");
            done();
          });
        });
  
  
      });
  });










describe("Server", () => {
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("The Polyglot Developer");
        });
    });
    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});