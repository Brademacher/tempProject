module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    // Giving the Review model reviewer, rating (we can decide a system), and comment area
    reviewer_name: DataTypes.STRING,
    rating: DataType.STRING,
    comment: dataType.STRING
  });

  Review.associate = function (models) {
    // Associating Review with Items
    Review.belongsTo(models.Item, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};