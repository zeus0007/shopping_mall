const Sequelize = require("sequelize");

export const sequelize = new Sequelize("nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { freezeTableName: true }
});

module.exports = sequelize;
