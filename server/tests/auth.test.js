import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';


const request = supertest(app);
const path = '/api/v1/auth';




const not_existing_user_login = {
  user_email: 'testlogin@gmail.com',
  user_password: 'andela'
}


const existing_user_wrong_password = {
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andelee'
}


const existing_user_login = {
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andela'
}

const login_empty_user_email = {
  user_email: '',
  user_password: 'andela'
}

const start_user = {
  user_name: 'idris',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andela'
}
const new_user = {
  user_name: 'testing',
  user_email: 'test@test.com',
  user_password: 'testmeout'
}

const existing_user = {
  user_name: 'idris',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andela'
}


const empty_user_email = {
  user_name: 'idris',
  user_email: '',
  user_password: 'andela'
}
const empty_user_name = {
  user_name: '',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'andela',
}

const one_word_name_input = {
  user_name: 'i',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'password123',
}

const less_password = {
  user_name: 'idris',
  user_email: 'idrisforyou@gmail.com',
  user_password: 'chec',
}


const wrong_user_email_format = {
  user_name: 'idris',
  user_email: 'idmegaatgmail.com',
  user_password: 'andela'
}


const whitespace_user_email_format = {
  user_name: ' k ',
  user_email: 'idmegaatgmail.com',
  user_password: 'andela'
}


describe('All Authentication Tests', () => {


  describe('Signup Api Test', () => {

    describe('when user enter empty user name', () => {
      it('should give error and status code 400', (done) => {
        request.post(path + '/signup')
          .send(empty_user_name)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Please fill all field');
            done();
          });
      });

    });


    describe('when user enter a one word input', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(one_word_name_input)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'names should be three character and above');
            done();
          });
      });

    });



    describe('when user enter an empty email', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(empty_user_email)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Please fill all field');
            done();
          });
      });

    });


    describe('user enter wrong emaila format', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(wrong_user_email_format)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Invalid Email');
            done();
          });
      });

    });


    describe('when user enter less password', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(less_password)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'password must be 6 character and above');
            done();
          });
      });

    });


    describe('when user enter white space between name', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(whitespace_user_email_format)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'white sapce are not allowed in input');
            done();
          });
      });

    });



    describe('when user enter an empty data', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send({})
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Please fill all field');
            done();
          });
      });

    });


    describe('when user enter an existing registration email', () => {
      it('should not create user and return error', (done) => {
        request.post(path + '/signup')
          .send(existing_user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 409);
            assert.equal(res.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'User already exist!');
            done();
          });
      });

    });


    describe('when user enter a new user details', () => {
      it('should create user and return successful', (done) => {
        request.post(path + '/signup')
          .send(new_user)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 201);
            assert.equal(res.body.hasOwnProperty("token"), true);
            assert.equal(res.body.message, 'Registration Successful');
            done();
          });
      });

    });

  });


  describe('Login Api Test', () => {

    describe('when user enter an empty user email', () => {
      it('should not login and return error', (done) => {
        request.post(path + '/login')
          .send(login_empty_user_email)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'Please fill all field');
            done();
          });
      });

    });

    describe('when user enter a non existing user details', () => {
      it('should not login and return error', (done) => {
        request.post(path + '/login')
          .send(not_existing_user_login)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 404);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'User does not exist!');
            done();
          });
      });

    });


    describe('when user enter a valid user details', () => {
      it('should not login and return token', (done) => {
        request.post(path + '/login')
          .send(existing_user_login)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.hasOwnProperty("token"), true);
            assert.equal(res.body.message, 'Login Successful');
            done();
          });
      });

    });

    describe('when user enter a valid user details but wrong password', () => {
      it('should not login and return token', (done) => {
        request.post(path + '/login')
          .send(existing_user_wrong_password)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            assert.equal(res.statusCode, 400);
            assert.equal(res.body.hasOwnProperty("error"), true);
            assert.equal(res.body.error, 'invalid password');
            done();
          });
      });

    });


  });

});

