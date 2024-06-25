const { Todo } = require("../../db.js"); // Assuming this imports your User model

const getOneTodoController = async (req, res) => {
  const { idUser } = req.params;
  try {
    const todos = await Todo.findAll({
      where: {
        userId: idUser,
      },
    });

    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getOneTodoController;
