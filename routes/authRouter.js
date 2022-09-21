const { Router } = require("express");
const router = Router();
const controller = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/auth/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 9 }),
  ],
  controller.registration
);
router.post("/auth/login", controller.login);
router.get("/users", authMiddleware, controller.getUsers);
router.get("/user/:id", controller.getUsersById);

module.exports = router;
