const mongoose = require('mongoose'), 
    Student = require('../models/students.model'),
    util = require('util'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    keys = require("../config/config"),
    validateRegisterInput = require("../validation/register"),
    validateLoginInput = require("../validation/login");


// '/' Routes   

// Creates new student
exports.create = (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }

    // Trying to locate student in database
    Student.findOne({email: req.body.email}).then(student => {
        
        if(student){
            return res.status(400).json({ email: "Email already exists" });
        }
        // If student isn't found, will create new student 
        // and save it to the database
        else{
            const student = new Student({
                email: req.body.email
            });

            student.save( (err) => {
                if(err) {
                    console.log(err);
                    res.status(400).send(err);
                } 
                else {
                    res.json(student);
                    console.log(student);
                }
            });
        }
    });
    
};

// Lists all student information in the database
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

// Displays student information by id
exports.read = (req, res) => {
    res.json(req.student);
    // res.redirect();
};

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

// Tries to find student with given email address in the database
function locateStudentInDatabase(email){
    Student.find({}, (err, student) => {
        console.log(student.length);
        if(err){
            return res.status(400).send(err);
        }
        else if(student.length){
            console.log("looking into students");
            // Comparing each database entry's email with entered email
            student.forEach((currentStudent) => {
                bcrypt.compare(email, currentStudent.email).then(isMatch => {
                    // If there's a match, returns true
                    console.log("isMatch: " + isMatch);
                    if(isMatch){
                        return true;
                    }
                });

            })
            // If there is no match after looking at all email addresses, returns false
        }
        else{
            console.log("returning false");
            return false;
        }
    });
    console.log("exiting")
}

exports.register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Checks if email is entered with valid format
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;

    // Each entry in database is stored into student variable
    Student.find({}, (err, student) => {
        let matchFound = false;
        if(err){
            return res.status(400).send(err);
        }
        // If student is not empty, tries to find a match between entered email and hashed email in database
        else if(student.length){
            student.forEach((currentStudent) => {
                const isMatch = bcrypt.compareSync(email, currentStudent.email)
                    if(isMatch){
                        matchFound = true;
                    }
            })

        }

        // If there are no students in the database or no matching email addresses, will create new entry
        if(!student.length || matchFound != true){

            // Making new student 
            console.log("Creating new student");
            const newStudent = new Student({
                email: req.body.email
            });

            // Hashing email before saving into database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newStudent.email, salt, (err, hash) => {
                    if(err){
                        throw err;
                    }
                    newStudent.email = hash;

                    // Saving hashed email into database
                    newStudent.save( (err) => {
                        if(err) {
                            console.log(err);
                            return res.status(400).send(err);
                        } 
                        else {
                            console.log(newStudent.email);
                            return res.json(newStudent.email);
                        }
                    });      
                })
            })
        }
        // If matching email is found, returns "Email already created"
        else{
            return res.status(404).json({emailFound: "Email already created"}); 
        }
    });
}

exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Checks if email is valid
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    let hashedEmail;

    // Each entry in database is stored into student variable
    Student.find({}, (err, student) => {
        let matchFound = false;
        if(err){
            res.status(400).send(err);
        }
        // If student is not empty, tries to find a match between entered email and hashed email in database
        else if(student.length){
            student.forEach((currentStudent) => {
                const isMatch = bcrypt.compareSync(email, currentStudent.email);
                if(isMatch){
                    matchFound = true;
                    hashedEmail = currentStudent.email;
                }
            })
        }

        // If match is found in the database, returns hashed email
        if(matchFound){
            return res.json(hashedEmail);
        }
        // If no match found, returns "Email not found"
        else{
            return res.json({emailNotFound: "Email not found"}); 
        }

    });
}

// ROUTER.PARAM MIDDLEWARE

exports.studentByID = (req, res, next, id) => {
    Student.findById(id).exec(function(err, student) {
        if(err) {
            res.status(400).send(err);
        } 
        else {
            req.student = student;
            next();
        }
    });
};

exports.studentByEmail = (req, res, next, email) => {

    Student.findOne({email: email}, function(err, student){
        if(err){
            res.status(400).send(err);
        }
        else{
            req.student = student;
            next();
        }
    });
}