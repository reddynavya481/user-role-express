'use strict';
module.exports = (sequelize, DataTypes) => {
  const table1 = sequelize.define('table1', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phno:1234567890,
    
  }, {});
  table1.associate = function(models) {
    // associations can be defined here
  };
  return table1;
};