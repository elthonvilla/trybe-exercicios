'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'page_quantity',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      }
    });
    // id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
    // title: deve ser do tipo string e não pode ser nulo;
    // author: deve ser do tipo string e não pode ser nulo;
    // pageQuantity: deve ser do tipo integer e pode ser nulo;
    // createdAt: deve ser do tipo date e não pode ser nulo;
    // updatedAt: deve ser do tipo date e não pode ser nulo;
  },

  async down(queryInterface) {
    await queryInterface.dropTable('books');
  }
};
