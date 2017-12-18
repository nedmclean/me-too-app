module.exports = {
  up(queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert('Posts', [{
      username: "Sabrina",
      body: "lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      // ForumId: 1,
      location: "nwiofnosfn",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      username: "Catherine",
      body: "lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      // ForumId: 1,
      location: "nwiofnosfn",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }], {});
  },

  down(queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
