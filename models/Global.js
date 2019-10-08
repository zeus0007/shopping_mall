import Sequelize from "sequelize";

const UserSchema = sequelize.define(
  "user",
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    // options
  }
);

const model = Sequelize.model("User", UserSchema);

export default model;
