const mongoose = require("mongoose");

const textsSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
});

const Texts = mongoose.model("Texts", textsSchema);

module.exports = Texts;