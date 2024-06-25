const { User } = require("../db.js");

const registerController = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(201).json(users);
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerController;
