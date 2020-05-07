const Validator = require("validator"),
    isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data) {
    // Holds any email validation errors
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Checking if email is entered and valid
    if (Validator.isEmpty(data.email)) {
        errors.email = "Error: Email Field is Required";
    }

    //Checks if the email is invalid (ex: @test@tester.c)
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Error: Invalid Email Format";
    }
    
    // Checks if password and confirm password is entered, they are between 6-30 characters, and if they match
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    //Pre-existing emails are already checked in EmailEntry.js

    return {
        errors,
        isValid: isEmpty(errors),
    };

};
  