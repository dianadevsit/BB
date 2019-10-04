module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    userID: DataTypes.STRING,
    userPWD: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailID: DataTypes.STRING,
    studentType: DataTypes.STRING,
    userBio: DataTypes.STRING
  });

  return users;
};
