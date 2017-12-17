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
        instanceMethods: {
          /**
           * Compare plain password to user's hashed password
           * @method
           * @param {String} password
           * @returns {Boolean} password match
           */
          validPassword(password) {
            return bcrypt.compareSync(password, this.password);
          },

          /**
           * Hash user's password
           * @method
           * @returns {void} no return
           */
          hashPassword() {
            this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
          }
        },

        hooks: {
          beforeCreate(user) {
            user.hashPassword();
          },

          beforeUpdate(user) {
            if (user._changed.password) {
              user.hashPassword();
            }
          }
        }
    });
    return User;
};