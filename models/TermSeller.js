import Sequelize from "sequelize";
import sequelize from "../database/connection";

export const term_sellers = sequelize.define("term_sellers", {
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
