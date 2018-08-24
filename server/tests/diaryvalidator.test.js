import assert from 'assert';
import {dairyInput, singleGetValidator} from '../helpers/diaryvalidator'


describe('Diary Input Test', () => {


    const short_title_input =  {
        diary_title: 'to',
        diary_content: 'this is toy'
    }
    const bad_input_format = {
        diary_title: 'the game of thrones',
        diary_content: {tobi: 'thisis'}
    }
    const only_whitespace_title = {
        diary_title: '   ',
        diary_content: 'g hfff'
    }

    const less_content = {
        diary_title: 'Hello',
        diary_content: 'sho'
    }
    
    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(dairyInput({}), 'Please fill all field');
            done();
        })
    });
    describe('When user enter an empty details', () => {
        it('should return an error', done => {
            assert.equal(dairyInput(''), 'Please fill all field');
            done();
        })
    });

    describe('When user enter a short title input', () => {
        it('should return an error', done => {
            assert.equal(dairyInput(short_title_input), 'Title should be 3 character and above');
            done();
        })
    });

    describe('When user enter only white space', () => {
        it('should return an error', done => {
            assert.equal(dairyInput(only_whitespace_title), 'Please fill all field');
            done();
        })
    });

    describe('When user enter a wrong email format', () => {
        it('should return an error', done => {
            assert.equal(dairyInput(bad_input_format), 'invalid input');
            done();
        })
    });

    describe('When user enter a less diary content', () => {
        it('should return an error', done => {
            assert.equal(dairyInput(less_content), 'Content must be 6 character and above');
            done();
        })
    });

});

describe('Single Get request Id validator', () => {
    describe('When given a decimal', () => {
        it('should return an error', done => {
            assert.equal(singleGetValidator(10.5), 'Invalid Request');
            done();
        })
    });

    describe('When given a negative number', () => {
        it('should return an error', done => {
            assert.equal(singleGetValidator(-5), 'Invalid Request');
            done();
        })
    });
})