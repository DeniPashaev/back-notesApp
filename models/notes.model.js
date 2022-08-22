const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
  color: String,
  isNote: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
  removeNote: {
    type: Boolean,
    default: false,
  },
  removeTime: String
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;