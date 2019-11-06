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

exports.register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;

    // Find student by email
    Student.findOne({ email }).then(student => {
        // If student with email is not found, creates new student and saves to database
        if (!student) {
            console.log("Creating new student");
            const newStudent = new Student({
                email: req.body.email
            });
            newStudent.save( (err) => {
                if(err) {
                    console.log(err);
                    res.status(400).send(err);
                } 
                else {
                    res.json(newStudent);
                    console.log(newStudent);
                }
            });
        }
        // If student is found, 
        else{
            return res.status(404).json({ emailFound: "Email already created" });
        }
    })
}

exports.login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;

    //Checks if email exists in database
    Student.findOne({email}).then(student => {
        if(!student){
            // return res.json({emailNotFound: "Email not found"});
            const newStudent = new Student({
                email: req.body.email
            });
            newStudent.save( (err) => {
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

        const payload = { 
            email: student.email, 
            // survey: student.survey
        };

        // Signing token 
        jwt.sign(
            payload, 
            keys.secretOrKey, 
            {expiresIn: 86400}, // 1 day
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer" + token
                });
            }
        ); 

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

exports.studentByEmail = (req, res, next, id) => {
    Student.find({email: req.body.email}, function(err, student){
        if(err){
            res.status(400).send(err);
        }
        else{
            req.student = student;
            next();
        }
    });
}