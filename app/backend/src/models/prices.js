module.exports = (sequelize, DataTypes) => {
  const PriceModel = sequelize.define('Price', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: DataTypes.STRING,
    ageMin: DataTypes.INTEGER,
    ageMax: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Prices',
    tableName: 'Prices',
    timestamps: false,
    underscored: true,
  });

  return PriceModel;
};
