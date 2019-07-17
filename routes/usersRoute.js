const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const passport = require("passport");
const registerUser = require("../validation/registerUser");
const loginUser = require("../validation/loginUser");
const User = require("../models/userModel");
const keys = require("../configurations/keys");

//For user registration
router.post("/register", (req, res) => {
  const { errors, isValid } = registerUser(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//For user login

router.post("/login", (req, res) => {

  const { errors, isValid } = loginUser(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ emailnotfound: "Email doesnt exist" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {

      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556930 //seconds
          },

          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
