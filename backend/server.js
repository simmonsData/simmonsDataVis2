const config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

const port = process.env.PORT || 5000;
const app = express.init()

app.listen(port, () => console.log(`Server now running on port `, config.port));