// all the forum types
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Forum = sequelize.define('Forum', {
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },

    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                Forum.hasMany(models.Post, {
                  foreignkey: 'id'
                })
            }
        }
    });
    return Forum;
};