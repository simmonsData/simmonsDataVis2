const Validator = require("validator"),
    isEmpty = require("is-empty");

//function validateLoginInput??????? Was set to validateRegisterInput

module.exports = function validateLoginInput(data) {
    // Holds any email validation errors
    let errors = {};

    data.loginEmail = !isEmpty(data.loginEmail) ? data.loginEmail : "";
    data.loginPassword = !isEmpty(data.loginPassword) ? data.loginPassword : "";

    // Checking if email is entered and valid
    if (Validator.isEmpty(data.loginEmail)) {
        errors.email = "Error: Email Field is Required";
    }
    
    // Checks if the email is a valid email
    else if (!Validator.isEmail(data.loginEmail)) {
        errors.email = "Error: Invalid Email Format";
    }

    // Checks if the password is entered 
    if (Validator.isEmpty(data.loginPassword)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};