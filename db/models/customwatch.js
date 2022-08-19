const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomWatch extends Model {
    static associate({User}) {
      // define association here
      CustomWatch.belongsTo(User, { foreignKey: "userId" });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    watchName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picture: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: "Users",
        key: "id",
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };

  const options = {
    sequelize,
    modelName: "CustomWatch",
    tableName: "CustomWatches",
  };

  CustomWatch.init(attributes, options);
  return CustomWatch;
};
