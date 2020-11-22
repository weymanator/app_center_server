'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      evento: {
        type: Sequelize.STRING
      },
      detalles: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATEONLY                    
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
         model: "Users",
         key: "id"
        }
       },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agendas');
  }
};