const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("todo", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
