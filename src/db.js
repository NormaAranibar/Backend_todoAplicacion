require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

/*const { P_DB_USER, P_DB_PASSWORD, P_DB_HOST, P_DB_NAME } = process.env;

const sequelize = new Sequelize(
`postgres://${P_DB_USER}:${P_DB_PASSWORD}@${P_DB_HOST}/${P_DB_NAME}`,
{ 
logging: false,
native: false,
}
);*/

 const { DB_USUARIO, DB_PASSWORD, DB_HOST, DB_PORT, DB_SERVICE } = process.env;

 const sequelize = new Sequelize({
   username: DB_USUARIO,
   password: DB_PASSWORD,
   host: DB_HOST,
   port: DB_PORT,
   dialect: "oracle",
   dialectOptions: {
     connectString: `${DB_HOST}:${DB_PORT}/${DB_SERVICE}`,
  },
   logging: false,
   native: false,
 });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Todo } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.hasMany(Todo);
Todo.belongsTo(User)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
