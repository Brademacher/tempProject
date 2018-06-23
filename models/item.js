module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    cost: {
      type: DataTypes.INT,
      allowNull: false,
      len: [1]
    },
    quantity: {
      type: DataTypes.INT,
      allowNull: false,
      len: [1]
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      default: false,
      len: [1]
    },
    sizes: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  Item.associate = function (models) {

    Item.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Item;
};