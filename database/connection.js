const Sequelize = require("sequelize");

export const sequelize = new Sequelize("shoppingmall", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { freezeTableName: true }
});

module.exports = sequelize;
