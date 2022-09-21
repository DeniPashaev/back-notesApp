const { Router } = require("express");

const router = Router();

router.use(require("./authRouter"));
router.use(require("./note.route"));
router.use(require("./todo.route"));

module.exports = router;
