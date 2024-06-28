const { Todo } = require("../../db.js"); // Assuming Todo model from your database

const updateTodoController = async (req, res) => {
  const { idTodo } = req.params;
  const { content } = req.body;

  try {
    const todo = await Todo.findByPk(idTodo);

    // Check if todo exists
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Update content
    todo.body = content;
    await todo.save(); // Persists changes to the database

    return res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateTodoController;
