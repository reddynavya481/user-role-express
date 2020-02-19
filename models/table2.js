'use strict';
module.exports = (sequelize, DataTypes) => {
  const table2 = sequelize.define('table2', {
    name: DataTypes.STRING
  }, {});
  table2.associate = function(models) {
    // associations can be defined here
  };
  return table2;
};