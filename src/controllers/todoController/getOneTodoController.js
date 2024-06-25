const { Todo } = require("../../db.js"); // Assuming this imports your User model

const getOneTodoController = async (req, res) => {
  const { idTodo } = req.params;
  
  try {
    const todo = await Todo.findByPk(idTodo);

    return res.status(200).json(todo);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getOneTodoController;
