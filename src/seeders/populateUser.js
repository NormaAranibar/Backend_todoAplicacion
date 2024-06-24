const { User } = require("../db"); // Import the User model
const bcrypt = require("bcryptjs");

async function populateUser() {
  try {
    const saltRounds = parseInt(process.env.SALT, 10);
    if (!Number.isInteger(saltRounds) || saltRounds < 10) {
      throw new Error("Invalid SALT value in environment. Minimum 10 rounds.");
    }

    const password1 = await bcrypt.hash("secret", saltRounds);
    const password2 = await bcrypt.hash("secret", saltRounds);
    const password3 = await bcrypt.hash("secret", saltRounds);

    const users = await User.bulkCreate([
      {
        name: "Norma",
        email: "norma@gmail.com",
        password: password1,
        admin: true,
      },
      {
        name: "Marisol",
        email: "marisol@gmail.com",
        password: password2,
        admin: false,
      },
      {
        name: "Marleny",
        email: "marleny@gmail.com",
        password: password3,
        admin: true,
      },
    ]);

    console.log("User table populated successfully:");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;
