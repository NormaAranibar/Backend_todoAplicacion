const { Todo } = require("../../db.js");

const createTodoController = async (req, res) => {
  const { content, idUser } = req.body;
  try {
    const todo = await Todo.create({ body: content, userId: idUser });
    return res.status(200).json(todo);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createTodoController;
