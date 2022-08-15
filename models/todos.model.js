const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  name: String,
  todosAr:[
    {
      title:String,
      completed: {
        type: Boolean,
        default: false,
      }
    }
  ],
  time: String,
  color: String,
  important: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;