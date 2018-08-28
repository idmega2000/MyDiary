import supertest from 'supertest';
import app from '../../app';
import assert from 'assert';


const request = supertest(app);
const pathSigup = '/api/v1/auth/signup';
const pathLogin = '/api/v1/auth/login';


describe('Signup Validation Test', () => {


    const bad_email_format = {
        user_name: 'dimeji',
        user_email: 'dimejiiiiyahoo.com',
        user_password: 'shorryy'
    }
    const bad_input_format = {
        user_name: {tobi: 'thisis'},
        user_email: 'dimejiiii@yahoo.com',
        user_password: 'shorryy'
    }
    const whitespace_name = {
        user_name: '  k  ',
        user_email: 'dimeji@iiiyahoo.com',
        user_password: 'shorryy'
    }

    const less_password = {
        user_name: 'kolijay',
        user_email: 'dimeji@iiiyahoo.com',
        user_password: 'sho'
    }

    const non_alpha_name_only = {
        user_name: 'koli55jay',
        user_email: 'dimeji@iiiyahoo.com',
        user_password: 'sho'
    }
    const empty_name = {
        user_name: '',
        user_email: 'dimeji@iiiyahoo.com',
        user_password: 'shodime'
    }
    



    describe('When user enter an empty data', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send(empty_name)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });


    
    describe('When user enter an empty data', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send({})
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
            request.post(pathSigup)
                .send(bad_email_format)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Email');
                    done();
                })
        });
    });


    
    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send('')
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
            request.post(pathSigup)
                .send(whitespace_name)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'white sapce are not allowed in input');
                    done();
                })
        });
    });


    
    describe('When user enter a wrong input format', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send(bad_input_format)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'invalid input');
                    done();
                })
        });
    });

        

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send(less_password)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'password must be 6 character and above');
                    done();
                })
        });
    });


    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            request.post(pathSigup)
                .send(non_alpha_name_only)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'names can only be character');
                    done();
                })
        });
    });

});

describe('Login Validation Test', () => {


    const bad_email_format = {
        user_email: 'dimejiiiiyahoo.com',
        user_password: 'shorryy'
    }
    const bad_input_format = {
        user_email: 'dimejiiii@yahoo.com',
        user_password: {tobi: 'thisis'}
    }
    const whitespace_name = {
        user_email: 'dimejiiii@yahoo.com',
        user_password: ' g h'
    }

    const less_password = {
        user_email: 'dimejiiii@yahoo.com',
        user_password: 'sho'
    }

    const empty_email = {
        user_email: '',
        user_password: 'shodimu'
    }
    
    

    describe('When user enter an empty data', () => {
        it('should return an error', done => {
            request.post(pathLogin)
                .send({})
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
            request.post(pathLogin)
                .send('')
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Please fill all field');
                    done();
                })
        });
    });
    describe('When user enter an empty data', () => {
        it('should return an error', done => {
            request.post(pathLogin)
                .send(empty_email)
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
            request.post(pathLogin)
                .send(bad_email_format)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'Invalid Email');
                    done();
                })
        });
    });


    describe('When user enter a input with white spaces', () => {
        it('should return an error', done => {
            request.post(pathLogin)
                .send(whitespace_name)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'white sapce are not allowed in input');
                    done();
                })
        });
    });


    
    describe('When user enter a input with wrong input format', () => {
        it('should return an error', done => {
            request.post(pathLogin)
                .send(bad_input_format)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'invalid input');
                    done();
                })
        });
    });


    describe('When user enter a password input with char less than 6', () => {
        it('should return an error', done => {
            request.post(pathLogin)
                .send(less_password)
                .expect('Content-Type', /json/)
                .end((err, res) => {
                    assert.equal(res.statusCode, 400);
                    assert.equal(res.body.error, 'password must be 6 character and above');
                    done();
                })
        });
    });


});



