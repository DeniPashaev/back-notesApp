const mongoose = require("mongoose");

const textsSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
  price: Number,
  point: Number,
  count: number,
  completed: {
    tipe: Boolean,
    default: false,
  },
});

const Texts = mongoose.model("Texts", textsSchema);

module.exports = Texts;
