module.exports = {
  up(queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert('Users', [{
      username: "Samuel",
      email: "samuel@gmail.com",
      password: "fhsifhsifh",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      username: "Braxton",
      email: "braxton@gmail.com",
      password: "erhewiorhewhro",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }], {});
  },

  down(queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Users', null, {});
  }
};
