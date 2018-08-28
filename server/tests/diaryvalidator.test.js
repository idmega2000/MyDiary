import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';
import jwt from 'jsonwebtoken';


const path = "/api/v1/entries/";
const request = supertest(app);


const token = jwt.sign({
    user_id: 1,
    user_email: 'idrisforyou@gmail.com',
}, process.env.JWT_KEY)



describe('Diary Input Test', () => {


    const short_title_input = {
        diary_title: 'to',
        diary_content: 'this is toy'
    }
    const bad_input_format = {
        diary_title: 'the game of thrones',
        diary_content: { tobi: 'thisis' }
    }
    const only_whitespace_title = {
        diary_title: '   ',
        diary_content: 'g hfff'
    }

    const less_content = {
        diary_title: 'Hello',
        diary_content: 'sho'
    }

    const empty_title = {
        diary_title: '',
        diary_content: 'shhhgkgjo'
    }


    describe('When user enter an empty data', () => {
        it('should return an error', done => {
            request.post(path)
                .send({})
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });





    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            request.post(path)
                .send('')
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });


    
    describe('When user enter a short title input', () => {
        it('should return an error', done => {
            request.post(path)
                .send(empty_title)
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });

    describe('When user enter a short title input', () => {
        it('should return an error', done => {
            request.post(path)
                .send(short_title_input)
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Title should be 3 character and above');
                    done();
                })
        });
    });

    describe('When user enter only white space', () => {
        it('should return an error', done => {
            request.post(path)
                .send(only_whitespace_title)
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });


    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            request.post(path)
                .send(bad_input_format)
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'invalid input');
                    done();
                })
        });
    });

    describe('When user enter a less diary content', () => {
        it('should return an error', done => {
            request.post(path)
                .send(less_content)
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Content must be 6 character and above');
                    done();
                })
        });
    });


});

describe('Single Get request Id validator', () => {



    describe('When given a decimal', () => {
        it('should return an error', done => {
            request.get(path + '10.5')
                .send()
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Request');
                    done();
                })
        });
    });
    describe('When given a negative number', () => {
        it('should return an error', done => {
            request.get(path + '-5')
                .send()
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Request');
                    done();
                })
        });
    });


    describe('When given a string', () => {
        it('should return an error', done => {
            request.get(path + 'tolani')
                .send()
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Request');
                    done();
                })
        });
    });

    describe('When given a string', () => {
        it('should return an error', done => {
            request.put(path + 'tolani')
                .send()
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Request');
                    done();
                })
        });
    });
    describe('When given a string', () => {
        it('should return an error', done => {
            request.delete(path + 'tolani')
                .send()
                .set('Authorization', 'Bearer ' + token)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Request');
                    done();
                })
        });
    });

})