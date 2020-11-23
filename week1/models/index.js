const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedImageSchema = new Schema({
  fname: String,
  lname: String,
  filename: String
});

const SavedImage = mongoose.model("SavedImage", savedImageSchema);

module.exports = SavedImage;