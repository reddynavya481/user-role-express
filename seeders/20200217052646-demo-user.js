'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Users', [{
        firstName: 'suma',
        middleName:'sree',
        lastName:'madam',
        phno:'9087567987',
        rollid:2,
        projectId:2,
        checkDelete:false,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
