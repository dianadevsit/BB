module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      User_ID: DataTypes.STRING,
      Skill_ID: DataTypes.STRING,
      Rating_ID: DataTypes.STRING
    });
    return User;
  };