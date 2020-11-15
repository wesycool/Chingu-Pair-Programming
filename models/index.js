const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savedImageSchema = new Schema({
  imgObj: Buffer
});

const SavedImage = mongoose.model("SavedImage", savedImageSchema);

module.exports = SavedImage;