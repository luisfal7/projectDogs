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
    height:{
      type: DataTypes.JSONB
    },
    weight:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    danger: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: Math.ceil(Math.random()) * 10
    },
    image: { type: DataTypes.JSONB, 
      allowNull: true,
    }
  }, {
    timestamps: false
  });

};
