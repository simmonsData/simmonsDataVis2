const mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


const studentSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
        //match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //https://emailregex.com/
    },
    updated_at : Date,
    created_at : Date
    // survey: {
    //     general: {
    //         question1: {
    //             type: Number,
    //         },
    //         question2: {
    //             type: String,
    //         },
    //         question3: {
    //             type: String,
    //         }
    //     },
    //     college: {
    //         question1: {
    //             type: String,
    //         },
    //         question2: {
    //             type: String,
    //         },
    //         question3: {
    //             type: String,
    //         }
    //     },
    //     outOfClassActivity: {
    //         question1: {
    //             type: Array,
    //         },
    //         question2: {
    //             type: Number
    //         }
    //     },
    //     majorSatisfaction: {

    //     }
    // }
});

studentSchema.pre('save', function(next) {
    const currentDate = new Date();
    this.updated_at = currentDate;
    if(!this.created_at){
      this.created_at = currentDate;
    }
    next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


