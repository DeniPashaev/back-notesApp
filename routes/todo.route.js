const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router();

router.post("/todo/post", todosController.postTodo)
router.get("/todo/get/:id", todosController.getTodoById)
router.get("/todo/get", todosController.getAllTodo)
router.delete("/todo/delete/:id", todosController.deleteTodo)
router.patch("/todo/path/:id", todosController.pathTodo)
//router.patch("/todo/arr/patch/:id/:id", todosController.pathTodoArr)


module.exports = router;