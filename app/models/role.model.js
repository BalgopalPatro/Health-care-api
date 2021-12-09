const mongoose = require("mongoose");
import uniqid from 'uniqid'

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;
