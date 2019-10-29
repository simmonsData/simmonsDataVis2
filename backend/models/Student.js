const mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


const studentSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //https://emailregex.com/
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


