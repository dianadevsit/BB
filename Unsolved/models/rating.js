module.exports = function(sequelize, DataTypes) {
    var rating = sequelize.define("rating", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return rating;
  };
