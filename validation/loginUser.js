const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function loginValidation(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field must not be empty";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field must not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
