module.exports = function(sequelize, DataTypes) {
    var ratings = sequelize.define("ratings", {
      ratingID: DataTypes.INTEGER,
      ratingDesc: DataTypes.STRING
    });
    return ratings;
  };
  