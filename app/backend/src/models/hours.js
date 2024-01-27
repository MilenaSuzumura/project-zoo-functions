module.exports = (sequelize, DataTypes) => {
  const HourModel = sequelize.define('Hour', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    day: DataTypes.STRING,
    open: DataTypes.NUMBER,
    close: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Hours',
    tableName: 'Hours',
    timestamps: false,
    underscored: true,
  });

  return HourModel;
};