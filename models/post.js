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
      len: [1,500]
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }


  });
return Post;
};

