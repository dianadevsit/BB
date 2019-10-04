module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userID: DataTypes.STRING,
    userPWD: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailID: DataTypes.STRING,
    studentType: DataTypes.STRING,
    userBio: DataTypes.STRING
  });

  return Users;
};
