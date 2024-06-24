const { User } = require("../db.js"); // Assuming this imports your User model
const bcrypt = require("bcryptjs"); // For secure password comparison

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      console.log("User not found!");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log("Incorrect password!");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginController;
