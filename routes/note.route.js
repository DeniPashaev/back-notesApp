const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post("/note/post", notesController.postNotes);
router.get("/note/get/:id", notesController.getnotesById);
router.get("/note/get", notesController.getAllNotes);
router.delete("/note/delete/:id", notesController.deleteNote);
router.patch("/note/path/:id", notesController.pathNote);

module.exports = router;
