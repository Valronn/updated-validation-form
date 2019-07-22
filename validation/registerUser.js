const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function registerValidation(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //Username
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field mustn't be empty!";
  }

  //Email
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field mustn't be empty!";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Pass
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field mustn't be empty!";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field mustn't be empty!";
  }

  if (!validator.isLength(data.password, { min: 8, max: 50 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
