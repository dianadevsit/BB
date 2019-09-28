module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      User_ID: DataTypes.STRING,
      User_PWD: DataTypes.STRING,
      First_Name: DataTypes.STRING,
      Last_Name: DataTypes.STRING,
      Email_ID: DataTypes.STRING,
      Student_Type: DataTypes.STRING,
      User_Bio: DataTypes.STRING
    });
    return User;
  };