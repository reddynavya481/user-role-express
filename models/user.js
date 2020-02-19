'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    phno: DataTypes.STRING,
    rollid:DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Role, {foreignKey: 'rollid'})
  };
  return User;
};