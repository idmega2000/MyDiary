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
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .set('Content-Type','multipart/form-data')
                .set('connection', 'keep-alive')
                .field('diary_title','')
                .field('diary_content','')
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
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .set('Content-Type','multipart/form-data')
                .set('connection', 'keep-alive')
                .field('diary_title', empty_title.diary_title)
                .field('diary_content', empty_title.diary_content) 
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
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .set('Content-Type','multipart/form-data')
                .set('connection', 'keep-alive')
                .field('diary_title', short_title_input.diary_title)
                .field('diary_content', short_title_input.diary_content) 
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
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .set('Content-Type','multipart/form-data')
                .set('connection', 'keep-alive')
                .field('diary_title', only_whitespace_title.diary_title)
                .field('diary_content', only_whitespace_title.diary_content)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });


    describe('When user enter a less diary content', () => {
        it('should return an error', done => {
            request.post(path)
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .set('Content-Type','multipart/form-data')
                .set('connection', 'keep-alive')
                .field('diary_title', less_content.diary_title)
                .field('diary_content', less_content.diary_content)
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