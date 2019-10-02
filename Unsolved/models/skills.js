module.exports = function(sequelize, DataTypes) {
  var skills = sequelize.define("skills", {
    skill: DataTypes.STRING
  });
  return skills;
};
