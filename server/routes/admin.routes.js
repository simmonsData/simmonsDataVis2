const admin = require('../controllers/students.controller.js'), 
    express = require('express'), //refers to Express the middleware helper for Node.js
    router = express.Router(); //refers to the Router() function in Express the middleware helper for Node.js

router.route('/admin/upload')
    .post(admin.upload);

module.exports = adminRouter;