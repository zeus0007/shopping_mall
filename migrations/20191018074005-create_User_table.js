"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
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
      },
      seller_check: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
