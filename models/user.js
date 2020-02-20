'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    phno: DataTypes.STRING,
    rollid:DataTypes.INTEGER,
    checkDelete:true
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Role, {foreignKey: 'rollid'})
    User.belongsTo(models.Project,{foreignKey:'projectId'})
    models.Project.belongsTo(models.Role,{foreignKey:'rollId'})
    models.Project.hasMany(User,{foreignKey:'projectId'})
  };
  return User;
};