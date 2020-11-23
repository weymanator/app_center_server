'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactoShido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contactoShido.init({
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    contactowner: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contactoShido',
  });
  return contactoShido;
};