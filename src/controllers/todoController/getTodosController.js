const { Todo } = require("../../db.js"); // Assuming this imports your User model

const getTodosController = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getTodosController;
