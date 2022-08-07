const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  // defino el modelo
  const Temperament = sequelize.define('temperament', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    //initialAutoIncrement: 1000
  });
  return Temperament
};