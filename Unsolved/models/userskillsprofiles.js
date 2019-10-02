module.exports = function(sequelize, DataTypes) {
  var UserSkillsProfiles = sequelize.define("UserSkillsProfiles", {
    userID: DataTypes.STRING,
    skillID: DataTypes.INTEGER,
    ratingID: DataTypes.INTEGER
  });

  return UserSkillsProfiles;
};
