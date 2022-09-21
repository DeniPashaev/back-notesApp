const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/index.route"));

mongoose
  .connect(
    "mongodb+srv://deni:delan_rero_rero@cluster0.wpv95.mongodb.net/NotesApp"
  )
  .then(() => {})
  .then()
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log(`Yare Yare daze - http://localhost:${4000}`);
});
