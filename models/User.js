import Sequelize from "sequelize";
import sequelize from "../database/connection";

export const UserUser = sequelize.define("UserUser", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  useremail: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
});
