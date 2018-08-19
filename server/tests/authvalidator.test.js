import assert from 'assert';
import {signUpValidator, signInValidation} from '../helpers/authvalidator';

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
    



    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator({}), 'Please fill all field');
            done();
        })
    });
    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator(''), 'Please fill all field');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator(bad_email_format), 'Invalid Email');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator(whitespace_name), 'white sapce are not allowed in input');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator(bad_input_format), 'invalid input');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signUpValidator(less_password), 'password must be 6 character and above');
            done();
        })
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
    



    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(signInValidation({}), 'Please fill all field');
            done();
        })
    });
    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(signInValidation(''), 'Please fill all field');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signInValidation(bad_email_format), 'Invalid Email');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signInValidation(whitespace_name), 'white sapce are not allowed in input');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signInValidation(bad_input_format), 'invalid input');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(signInValidation(less_password), 'password must be 6 character and above');
            done();
        })
    });

});



