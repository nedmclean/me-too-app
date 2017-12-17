'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 30],
            msg: 'Display name must be between 3 and 30 characters in length'
          }
        }
      
    }, 
      title: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
      body: {
        type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 500],
          msg: 'Must have maximum of 500 characters'
        }
      }
    },
    ForumId: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      refrences: {
        model: 'Forums',
        key: 'id'
      }
    },
      location: {
        type: Sequelize.STRING,
      allowNull: true
    }, 
      approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};