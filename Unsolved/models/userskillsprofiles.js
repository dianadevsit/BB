module.exports = function(sequelize, DataTypes) {
  var UserSkillsProfiles = sequelize.define("userSkillsProfiles", {
    userID: DataTypes.STRING,
    skillID: DataTypes.INTEGER,
    ratingID: DataTypes.INTEGER
  });

  return UserSkillsProfiles;
};
