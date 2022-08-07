const { DataTypes, literal } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  //sequelize.query("ALTER SEQUENCE "dogs_id_seq" RESTART WITH 265;");
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: literal("nextval('dogs_id_seq'::regclass)"),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMin:{
      type: DataTypes.INTEGER
    },
    heightMax:{
      type: DataTypes.INTEGER
    },
    weightMin:{
      type: DataTypes.INTEGER
    },
    weightMax:{
      type: DataTypes.INTEGER
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  });

};
