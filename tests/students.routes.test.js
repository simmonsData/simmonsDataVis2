const should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Student = require('../models/students.model.js');

const app, agent, id;

// 1) Register new email address - should pass
// 2) Try to register old email address - should fail
// 3) Try to register email in incorrect format - should fail
// 4) Try to login with email in database - should pass
// 5) Try to login with email not in database - should fail
// 5) Try to login email in incorrect format - should fail
describe('Student register and login tests', function(){
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
        agent.post('/api/students')
            .send(student)
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                should.exist(res.body._id);
                should.exist(res.body.email);
                should.exist(res);
                id = res.body._id;
                done();
            });
    })
    it('should not register email address already in database', function(done){
        const student = {
            email: 'test1@test.com',
        };
        agent.post('/api/students')
            .send(student)
            .expect(404)
            .end(function(err, res) {
                should.exist(err);
                done();
            });
    })
})