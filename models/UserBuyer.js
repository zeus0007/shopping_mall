import Sequelize from "sequelize";
import sequelize from "../database/connection";

export const user_buyers = sequelize.define("user_buyers", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(35),
    allowNull: false
  },
  user_email: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  address: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
});
