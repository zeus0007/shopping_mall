import Sequelize from "sequelize";
import sequelize from "../database/connection";

export const term_buyers = sequelize.define("term_buyers", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  term_agree: {
    type: Sequelize.BOOLEAN(),
    allowNull: false
  },
  email_agree: {
    type: Sequelize.BOOLEAN()
  }
});
