import dotenv from "dotenv";
const Sequelize = require("sequelize");

dotenv.config();
export const sequelize = new Sequelize("shoppingmall", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { freezeTableName: true }
});

module.exports = sequelize;
