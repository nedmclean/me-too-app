// all the data input by the user
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: 'Display name must be between 3 and 30 characters in length'
        }
      }
    
  },  
    title: {
      type: DataTypes.STRING,
      allownull: false,
      len: {
        args: [1,100]
      }
    },
    desription: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [1, 500],
        msg: 'Maximum of 500 characters'
      }
    },
    body: {
      type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 500],
        msg: 'Maximum of 500 characters'
      }
    }
  }, 
    location: {
      type: DataTypes.STRING,
    allowNull: true
  }, 
    approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
  },{
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Post.belongsTo(models.Forum, {
          foreignkey: { allowNull: true },
          allowNull: false
        });
      }
    }
  });
  return Post;
};