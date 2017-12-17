// this is the database for management information
'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [3, 30],
                    msg: 'Display name must be between 3 and 30 characters in length'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        },
        hooks: {
          beforeCreate: (user) => {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
          },

          beforeUpdate: (user) => {
            if (user._changed.password) {
              user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
            }
          }
        }
    });
    return User;
};