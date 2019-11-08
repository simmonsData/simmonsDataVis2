const mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


const studentSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
        //match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //https://emailregex.com/
    },
    updated_at : Date,
    created_at : Date,
    survey: {
        general: {
            question1: {type: Number},
            question2: {type: String},
            question3: {type: String}
        },
        college: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String,}
        },
        outOfClassActivity: {
            question1: {type: Array},
            question2: {type: Number}
        },
        majorSatisfaction: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String},
            question4: {type: String},
            question5: {type: String},
            question6: {type: String},
            question7: {type: String},
            question8: {type: String}
        },
        disciplineBelonging: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String}
        },
        majorValuing: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String}
        },
        achievmentStrinving: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String},
            question4: {type: String},
            question5: {type: String}
        },
        peerInteraction: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String},
            question4: {type: String}   
        },
        gritScale: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String},
            question4: {type: String},
            question5: {type: String},
            question6: {type: String},
            question7: {type: String},
            question8: {type: String},
        },
        typesOfTopActivity: {
            question1: {type: String}
        },
        engineeringOutcomes: {
            question1: {type: String},
            question2: {type: String},
            question3: {type: String},
            question4: {type: String},
            question5: {type: String},
            question1: {type: String},
            question2: {type: String},
            question3: {type: String}
        },
        phoneNumber: {
            type: Number,
            unique: true,
            trim: true
        }

    }
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


