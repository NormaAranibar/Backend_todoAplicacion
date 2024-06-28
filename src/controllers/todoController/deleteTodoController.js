const { Todo } = require("../../db.js"); // Assuming Todo model from your database

const deleteTodoController = async (req, res) => {
  const { idTodo } = req.params;

  try {
    // // Check if todo exists
    const todo = await Todo.findByPk(idTodo);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await Todo.destroy({
      where: {
        id: idTodo,
      },
    });

    return res.status(200).json({ message: "Todo deleted successfully",id:todo.id });
  } catch (error) {
    console.error("Error deletting todo:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteTodoController;
