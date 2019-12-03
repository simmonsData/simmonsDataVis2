const should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Student = require('../models/students.model.js');

let app, agent, id;

// 1) Register new email address - should pass
// 2) Try to register old email address - should fail
// 3) Try to register email in incorrect format - should fail
// 4) Try to login with email in database - should pass
// 5) Try to login with email not in database - should fail
// 5) Try to login email in incorrect format - should fail
describe('Student register,login, and CRUD tests', function(){
    this.timeout(10000);

    before(function(done) {
        app = express.init();
        agent = request.agent(app);
    
        done();
    });

    it('registers email address to database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(200)
            .end(function(err, res) {
                should.exist(res);
                id = res.body
                done();
            });
    })
    it('should not register email address already in database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.body.emailFound.should.equal('Email already created');
                done();
            });
    })
    it('should not register email address in incorrect format', function(done){
        const student = {
            email: 'test1@',
        };
        agent.post('/api/students/register')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    })
    it('logins email address to database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                id = res.body;
                done();
            });
    })
    it('should not login email address not in database', function(done){
        const student = {
            email: 'fagre@test.com',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                res.body.emailNotFound.should.equal('Email not found');
                done();
            });
    })
    it('should not login email address already in incorrect format', function(done){
        const student = {
            email: 'test1@',
        };
        agent.post('/api/students/login')
            .send(student)
            .expect(400)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res);
                done();
            });
    })
    it('should retrieve all students', function(done){
        agent.get('/api/students')
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                should.exist(res);
                done();
            })
    })
    it('should be able to retrieve a single student', function(done){
        Student.findOne({email: 'test1@test.com'}, function(err, student){
            if(err){
                console.log(err);
            }
            else{
                agent.get('/api/students/' + student._id)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        should.exist(res);
                        res.body.email.should.equal('test1@test.com');
                        done();
                    })
            }
        })
    })

    after(function(done) {
        console.log(id);
        if(id) {
            Student.deleteOne({ _id: id }).exec(function() {
              id = null;
              done();
            });
          } else {
            done();
          }
    })
})