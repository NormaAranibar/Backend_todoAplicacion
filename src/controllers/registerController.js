const { User } = require("../db.js");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerController;
