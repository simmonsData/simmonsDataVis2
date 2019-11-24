const mongoose = require('mongoose'),
    Student = require('../models/students.model'),
    util = require('util'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    keys = require("../config/config"),
    validateRegisterInput = require("../validation/register"),
    validateLoginInput = require("../validation/login");


// '/' Routes

// Lists all student information in the database - get request
exports.list = (req, res) => {
    Student.find({}, (err, student) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200);
            res.json(student);
        }
    });
};

// STUDENT ID ROUTES

// Displays student information - get request
exports.read = (req, res) => {
    res.json(req.student);
    // res.redirect();
};

// Updates student information - put request
exports.update = (req, res) => {
    const student = req.student;
    student.email = req.body.email;

    const currentDate = new Date();
    student.updated_at = currentDate;

    student.save( (err) => {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        else{
            res.json(student);
            console.log(student);
            // res.redirect();
        }
    });
}

// Deletes student entry in database - delete request
exports.delete = (req, res) => {
    const student = req.student;

    Student.findByIdAndRemove(student.id, function(err){
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        else{
            res.json(student);
            console.log(student);
        }
    });
}

// REGISTER/LOGIN ROUTES

// // Tries to find student with given email address in the database
// function locateStudentInDatabase(email){
//     Student.find({}, (err, student) => {
//         console.log(student.length);
//         if(err){
//             return res.status(400).send(err);
//         }
//         else if(student.length){
//             console.log("looking into students");
//             // Comparing each database entry's email with entered email
//             student.forEach((currentStudent) => {
//                 bcrypt.compare(email, currentStudent.email).then(isMatch => {
//                     // If there's a match, returns true
//                     console.log("isMatch: " + isMatch);
//                     if(isMatch){
//                         return true;
//                     }
//                 });

//             })
//             // If there is no match after looking at all email addresses, returns false
//         }
//         else{
//             console.log("returning false");
//             return false;
//         }
//     });
//     console.log("exiting")
// }

// Registers a new student - post request
exports.register = (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    // Checks if email is entered with valid format

    if(!isValid){
        if(errors){
            //return res.json(errors);
            res.status(400).send(errors);
        }
        console.log(errors);
    }
    else {
        console.log(errors);
        const email = req.body.email;
        // Each entry in database is stored into student variable
        Student.find({}, (err, student) => {
            let matchFound = false;
            if (err) {
                return res.status(400).send(err);
            }
            // If student is not empty, tries to find a match between entered email and hashed email in database
            else if (student.length) {
                student.forEach((currentStudent) => {
                    const isMatch = bcrypt.compareSync(email, currentStudent.email)
                    if (isMatch) {
                        matchFound = true;
                    }
                })
            }

            // If there are no students in the database or no matching email addresses, will create new entry
            if (!student.length || matchFound !== true) {
                // Making new student
                console.log("Creating new student");
                const newStudent = new Student({
                    email: req.body.email
                });
                // Hashing email before saving into database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newStudent.email, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        newStudent.email = hash;
                        // Saving hashed email into database
                        newStudent.save((err) => {
                            if (err) {
                                console.log(err);
                                return res.status(400).send(err);
                            } else {
                                console.log(newStudent.email);
                                return res.json(newStudent.email);
                            }
                        });
                    })
                })
            }
            // If matching email is found, returns "Email already created"
            else {
                return res.status(400).json({emailFound: "Email already created"});
                //return res.status(200).json({emailFound: "Email already created"});
            }

        });

}}

// Logins student by email address - post request
exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Checks if email is valid
    if(!isValid){
        if(errors){
            //return res.json(errors);
            res.status(400).send(errors);
        }
        console.log(errors);
    }
    else {

        const email = req.body.email;
        let hashedEmail;

        // Each entry in database is stored into student variable
        Student.find({}, (err, student) => {
            let matchFound = false;
            if (err) {
                res.status(400).send(err);
            }
            // If student is not empty, tries to find a match between entered email and hashed email in database
            else if (student.length) {
                student.forEach((currentStudent) => {
                    const isMatch = bcrypt.compareSync(email, currentStudent.email);
                    if (isMatch) {
                        matchFound = true;
                        hashedEmail = currentStudent.email;
                    }
                })
            }

            // If match is found in the database, returns hashed email
            if (matchFound) {
                return res.json(hashedEmail);
            }
            // If no match found, returns "Email not found"
            else {
                return res.status(400).json({emailNotFound: "Email not found"});
            }
        }); }
}

// ROUTER.PARAM MIDDLEWARE

// Middleware for locating student entry in database by their email
exports.studentByEmail = (req, res, next, email) => {
    Student.find({}, (err, student) => {
        if(err){
            res.status(400).send(err);
        }
        else{
            let matchFound = false;
            let foundStudent;
            // If student is not empty, tries to find a match between entered email and hashed email in database
            if(student.length){
                student.forEach((currentStudent) => {
                    const isMatch = bcrypt.compareSync(email, currentStudent.email);
                    if(isMatch){
                        matchFound = true;
                        foundStudent = currentStudent;
                    }
                })
            }

            if(matchFound){
                req.student = foundStudent;
                next();
                validateRegisterInput(err);
            }
            //another for nomatch found that will allow to add new student without
            //displaying {"studentNotFound":"Student not found"}
            else{
                return res.json({studentNotFound: "Student not found"});
            }
        }
    });
}