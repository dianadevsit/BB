module.exports = function(sequelize, DataTypes) {
  var userSkillsProfiles = sequelize.define("userSkillsProfiles", {
    userID: DataTypes.STRING,
    skillID: DataTypes.INTEGER,
    ratingID: DataTypes.INTEGER
  });

  return userSkillsProfiles;
};
