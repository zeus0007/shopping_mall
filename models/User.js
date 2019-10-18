import Sequelize from "sequelize";
import sequelize from "../database/connection";

export const users = sequelize.define("users", {
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
  seller_number: {
    type: Sequelize.STRING(20),
    default: false
  },
  address: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  seller_check: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

export default users;
