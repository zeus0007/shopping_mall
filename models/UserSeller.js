import Sequelize from "sequelize";
import sequelize from "../database/connection";
import passportLocalSequelize from "passport-local-sequelize";

const user_sellers = sequelize.define("user_sellers", {
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

passportLocalSequelize.attachToUser(user_sellers, {
  userEmailField: "user_email",
  passwordField: "password"
});

export default user_sellers;
