const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  // get user from mongoose model and send in response
  User.findOne({ _id: req.userId }, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.status(200).send({ user: user, message: "Welcome in the User Board" });
    }
  })
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
