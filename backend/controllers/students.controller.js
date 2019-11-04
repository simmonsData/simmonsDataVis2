const mongoose = require('mongoose'), 
    Student = require('../models/students.model.js'),
    util = require('util');

// Creates new student
exports.create = (req, res) => {
    const student = new Student(req.body);

    student.save( (err) => {
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } 
        else {
            res.json(student);
            console.log(student);
        }
    }
)};

// Displays student
exports.read = (req, res) => {
    res.json(req.student);
};

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