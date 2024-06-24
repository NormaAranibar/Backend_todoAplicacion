const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const populateUser = require("./src/seeders/populateUser.js");
const populateTodo = require("./src/seeders/populateTodo.js");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  })
  .then(() => populateUser())
  .then(() => populateTodo())
  .catch((error) => console.error(error));
