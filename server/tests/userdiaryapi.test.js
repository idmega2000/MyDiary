import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';
import jwt from 'jsonwebtoken';

import DbModel from '../models/dbhconnect';


const path = "/api/v1/entries/";
const request = supertest(app);



const new_diary_entry = {
  diary_title: 'my world',
  diary_content: 'i begein my educational journey in the United state of Abuja'
}
const edit_diary_entry = {
  diary_title: 'my world with Andela',
  diary_content: 'i begein my educational journey in the United state of Lagos'
}

const token = jwt.sign({
  user_id: 1,
  user_email: 'idrisforyou@gmail.com',
}, process.env.JWT_KEY)

describe('All diary Api Tests', () => {

  describe('When dataBase is empty', () => {

    describe('when user login and there is no diary content', () => {
      it('should return no diary content', (done) => {
        request.get(path)
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 404);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Diary is Empty');
            done();
          });
      });
    });

  })


  describe('Post Api Test', () => {

    describe('when user enter diary content without authentication', () => {
      it('should return error and status code 401', (done) => {
        request.post(path)
          .send(new_diary_entry)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 401);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Unauthorized');
            done();
          });
      });

    });


    describe('when user create a diary entry', () => {
      it('should save diary into db and return the diary contents', (done) => {
        request.post(path)
          .send(new_diary_entry)
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 201);
            assert.equal(res.body.hasOwnProperty("diary"), true);
            assert.equal(res.body.diary.diary_title, new_diary_entry.diary_title);
            assert.equal(res.body.diary.diary_content, new_diary_entry.diary_content);
            done();
          });
      });
    });
  });

  describe('Get All Diary Api Test', () => {

    describe('when user enter diary content without authentication', () => {
      it('should return error and status code 401', (done) => {
        request.get(path)
          .send()
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 401);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Unauthorized');
            done();
          });
      });
    });


    describe('When an auth user login', () => {
      it('should return all diary content of the user', (done) => {
        request.get(path)
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.hasOwnProperty("diary"), true);
            assert.equal(res.body.diary[0].diary_title, new_diary_entry.diary_title);
            assert.equal(res.body.diary[0].diary_content, new_diary_entry.diary_content);
            done();
          });
      });
    });
  });


  describe('Get A Diary Api Test', () => {

    describe('when user select diary content without authentication', () => {
      it('should return error and status code 401', (done) => {
        request.get(path+ '1')
          .send()
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 401);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Unauthorized');
            done();
          });
      });
    });

    describe('When an auth user select a diary', () => {
      it('should return the diary content', (done) => {
        request.get(path + '1')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.hasOwnProperty("diary"), true);
            assert.equal(res.body.diary.diary_title, new_diary_entry.diary_title);
            assert.equal(res.body.diary.diary_content, new_diary_entry.diary_content);
            done();
          });
      });
    });

    describe('When an auth user give invalid id type for selection ', () => {
      it('should return error of Invalid Request', (done) => {
        request.get(path + 'tobi')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Invalid Request');
            done();
          });
      });
    });
    describe('When an auth user select a diary that does not exist', () => {
      it('should return error of Diary not found', (done) => {
        request.get(path + '5')
          .send(edit_diary_entry)
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 404);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Diary not found');
            done();
          });
      });
    });
  });

  
  describe('Put A Diary Api Test', () => {

    describe('when user edit diary content without authentication', () => {
      it('should return error and status code 401', (done) => {
        request.put(path+ '1')
          .send()
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 401);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Unauthorized');
            done();
          });
      });
    });


    describe('When an auth user send empty input', () => {
      it('should return error to fill empty field', (done) => {
        request.put(path + '1')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Please fill all field');
            done();
          });
      });
    });

    describe('When an auth user give wrong id type to edit', () => {
      it('should return error of Invalid Request', (done) => {
        request.put(path + 'tobi')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Invalid Request');
            done();
          });
      });
    });
    
    describe('When an auth user edit a diary', () => {
      it('should return the edited diary content', (done) => {
        request.put(path + '1')
          .send(edit_diary_entry)
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.hasOwnProperty("diary"), true);
            assert.equal(res.body.diary.diary_title, edit_diary_entry.diary_title);
            assert.equal(res.body.diary.diary_content, edit_diary_entry.diary_content);
            done();
          });
      });
    });
    describe('When an auth user edit a diary that does not exist', () => {
      it('should return error of Edit Failed', (done) => {
        request.put(path + '5')
          .send(edit_diary_entry)
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 404);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Diary Not Found');
            done();
          });
      });
    });
  });

  describe('Delete A Diary Api Test', () => {

    describe('when user delete diary content without authentication', () => {
      it('should give error and status code 401', (done) => {
        request.delete(path+ '1')
          .send()
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 401);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Unauthorized');
            done();
          });
      });
    });


    describe('When an auth user delete a non existing diary', () => {
      it('should return error of not found ', (done) => {
        request.delete(path + '5')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 404);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Diary Not Found');
            done();
          });
      });
    });

    describe('When an auth user give wrong id type to edit', () => {
      it('should return error of Invalid Request', (done) => {
        request.delete(path + 'tobi')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Invalid Request');
            done();
          });
      });
    });
    describe('When an auth user delete a diary', () => {
      it('should delete the diary', (done) => {
        request.delete(path + '1')
          .send()
          .set('Authorization', 'Bearer ' + token)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.message, 'Diary Deleted Successfully');
            done();
          });
      });
    });
  });

});

