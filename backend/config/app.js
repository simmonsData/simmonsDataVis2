const config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
    const app = express.init();
    const port = process.env.PORT || config.port;
    app.listen(port, () => 
        console.log(`Server now running on port `, port)
    );
};