const express = require('./express'),
    config = require('./config'), 
    mongoose = require('mongoose'),   
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

module.exports.init = function() {
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    
    //initialize app
    const app = express();

    //enable request logging for development debugging
    app.use(morgan('dev'));

    //body parsing middleware 
    app.use(bodyParser.json());

}
  