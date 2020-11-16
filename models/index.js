const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedImageSchema = new Schema({
  file: Object
});

const SavedImage = mongoose.model("SavedImage", savedImageSchema);

module.exports = SavedImage;