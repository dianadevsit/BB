module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define("Skills", {
    skill: DataTypes.STRING
  });
  return Skills;
};