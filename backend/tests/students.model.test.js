const should = require('should'), 
    mongoose = require('mongoose'), 
    assert =  require('chai').assert;
    Student = require('../models/students.model'), 
    config = require('../config/config');

const student = {
    email: "mhubert@gmail.com",
    survey: {
        general: {
            question1: 13,
            question2: "Male",
            question3: "White"
        }
    }
}

describe('Student Schema Unit Tests', function(){
    before(function(done) {
        mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
        done();
      });
    
    describe('Saving to database', function(){
        this.timeout(10000);

        it('saves properly when email is provided', function(done){
            new Student({
                email: student.email,
                survey: student.survey
            }).save(function(err, student){
                should.not.exist(err);
                id = student._id;
                done();
            });
        });

        it('throws an error when same email provided', function(done){
            new Student({
                email: student.email
            }).save(function(err){
                should.exist(err);
                done();
            });
        });
        it('throws an error when no email provided', function(done){
            new Student({
                survey: student.survey
            }).save(function(err){
                should.exist(err);
                done();
            });
        });
    });

    
});
