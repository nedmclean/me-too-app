module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }


  });

  //  User.associate = function(models) {
  //   User.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

return User;

};