const students = require('../controllers/students.controller.js'), 
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js

router.route('/')
    .get(students.list)
    .post(students.create);

// router.route('/:studentId')
//     .get(students.read)
//     .put(students.update)
//     .delete(students.delete);

router.route('/:studentEmail')
    .get(students.read)
    .put(students.update)
    .delete(students.delete);

router.route('/register')
    .post(students.register);

router.route('/login')
    .post(students.login);



// router.param('studentId', students.studentByID);
// router.param('studentEmail', students.studentByEmail);

module.exports = router;