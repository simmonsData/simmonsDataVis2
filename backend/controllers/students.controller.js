const mongoose = require('mongoose'), 
    Student = require('../models/students.model'),
    util = require('util'),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    keys = require("../config/config"),
    validateRegisterInput = require("../validation/register"),
    validateLoginInput = require("../validation/login");
    emailSystem = require('./email.controller');


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
    console.log(req.student);
    res.status(200);
    res.json(req.student);
};

// Displays student survey information - get request
exports.getSurveyInfo = (req, res) => {
    console.log(req.student.survey);
    res.status(200);
    res.json(req.student.survey);
}

// Updates student information - put request
exports.update = (req, res) => {
    const student = req.student;
    student.survey = req.body.survey;

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

// Registers a new student - post request
exports.register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Checks if email is entered with valid format
    if(!isValid){
        return res.status(400).json(errors);
    }
    const studentEmail = req.body.email;
    Student.findOne({email: studentEmail}, (err, student) => {
        if(err){
            return res.status(400).send(err);          
        }
        else{
            // No match found
            if(student === null){
                console.log("Creating new student");
                const newStudent = new Student({
                    email: req.body.email
                });

                // Saving email into database
                newStudent.save( (err, savedStudent) => {
                    if(err) {
                        console.log(err);
                        return res.status(400).send(err);
                    } 
                    // If match found, returns student id and email with link to survey is sent to given email 
                    else {
                        console.log(savedStudent.id);
                        const id = savedStudent.id;
                        emailSystem.send(id, studentEmail);
                        return res.json(id);
                    }
                });
            }
            // Match found
            else if(student !== null){
                return res.status(400).json({emailFound: "Email already created"}); 
            }
        }
    })
}

// Logins student by email address - post request
exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Checks if email is valid
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    let id;

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
                    id = currentStudent.id;
                }
            })
        }

        // If match is found in the database, returns id
        if(matchFound){
            emailSystem.send(id, email);
            return res.json(id);
        }
        // If no match found, returns "Email not found"
        else{
            res.status(400);
            return res.json({emailNotFound: "Email not found"}); 
        }

    });
}

// ROUTER.PARAM MIDDLEWARE

// Middleware for locating student entry in database by their id
exports.studentByID = (req, res, next, id) => {
    Student.findById(id).exec( (err, student) => {
        if(err){
            res.status(400);
            res.json({studentNotFound: "Student not found"}); 
        }
        else{
            req.student = student;
            next();
        }
    });
}
