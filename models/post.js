module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,20]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1,500]
      }
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }


  });
    Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

return Post;

};

