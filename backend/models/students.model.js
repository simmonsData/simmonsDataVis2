const mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    updated_at : Date,
    created_at : Date,
    // survey: {
    //     general: {
    //         question1: {type: Number},
    //         question2: {type: String},
    //         question3: {type: String}
    //     },
    //     college: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String,}
    //     },
    //     outOfClassActivity: {
    //         question1: {type: Array},
    //         question2: {type: Number}
    //     },
    //     majorSatisfaction: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String},
    //         question4: {type: String},
    //         question5: {type: String},
    //         question6: {type: String},
    //         question7: {type: String},
    //         question8: {type: String}
    //     },
    //     disciplineBelonging: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String}
    //     },
    //     majorValuing: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String}
    //     },
    //     achievmentStriving: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String},
    //         question4: {type: String},
    //         question5: {type: String}
    //     },
    //     peerInteraction: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String},
    //         question4: {type: String}   
    //     },
    //     gritScale: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String},
    //         question4: {type: String},
    //         question5: {type: String},
    //         question6: {type: String},
    //         question7: {type: String},
    //         question8: {type: String},
    //     },
    //     typesOfTopActivity: {
    //         question1: {type: String}
    //     },
    //     engineeringOutcomes: {
    //         question1: {type: String},
    //         question2: {type: String},
    //         question3: {type: String},
    //         question4: {type: String},
    //         question5: {type: String},
    //         question6: {type: String},
    //         question7: {type: String},
    //         question8: {type: String}
    //     },
    //     phoneNumber: {
    //         type: Number,
    //         trim: true
    //     }
    // }
    survey: {
        age:    {type: Number},
        gender: {type: String},
        raceEthnicity: {type: String},
        enrollStatus: {type: String},
        collegeYear: {type: String},
        major: {type: String},
        activities: {type: Array},
        weekHr: {type: Number},
        MajorSatisfaction1: {type: String},
        MajorSatisfaction2: {type: String},
        MajorSatisfaction3: {type: String},
        MajorSatisfaction4: {type: String},
        MajorSatisfaction5: {type: String},
        Belonging1: {type: String},
        Belonging2: {type: String},
        Belonging3: {type: String},
        MajorValuing1: {type: String},
        MajorValuing2: {type: String},
        MajorValuing3: {type: String},
        AchievementStriving1: {type: String},
        AchievementStriving2: {type: String},
        AchievementStriving3: {type: String},
        AchievementStriving4: {type: String},
        AchievementStriving5: {type: String},
        PosFalRelationship1: {type: String},
        PosFalRelationship2: {type: String},
        PosFalRelationship3: {type: String},
        PeerInteraction1: {type: String},
        PeerInteraction2: {type: String},
        PeerInteraction3: {type: String},
        PeerInteraction4: {type: String},
        Grit1: {type: String},
        Grit2: {type: String},
        Grit3: {type: String},
        Grit4: {type: String},
        Grit5: {type: String},
        Grit6: {type: String},
        Grit7: {type: String},
        Grit8: {type: String},
        topActivity: {type: String},
        E2: {type: Number},
        E3: {type: Number},
        E4: {type: Number},
        E5: {type: Number},
        E6: {type: Number},
        E7: {type: Number},
        E8: {type: Number},
        E9: {type: Number},
        phone: {type: String}
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


