const { Router } = require("express");

const getTodosController = require("../controllers/todoController/getTodosController.js");
const getOneTodoController = require("../controllers/todoController/getOneTodoController.js");
const getTodosById = require("../controllers/todoController/getTodosById.js");
const createTodoController = require("../controllers/todoController/createTodoController.js");
const updateTodoController = require("../controllers/todoController/updateTodoController.js");
const deleteTodoController = require("../controllers/todoController/deleteTodoController.js");

const router = Router();

router.route("/todos").get(getTodosController).post(createTodoController);
router
  .route("/todos/:idTodo")
  .get(getOneTodoController)
  .put(updateTodoController)
  .delete(deleteTodoController);
router.route("/todos/user/:idUser").get(getTodosById);

module.exports = router;
