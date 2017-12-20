module.exports = {
  up(queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert('Posts', [{
      username: "intern",
      body: "this creepy supervisor grabbed me from behind...", 
      // ForumId: 1,
      location: "Los Angeles",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      username: "Leave Me Alone",
      body: "Married boss keeps asking me out on dates", 
      // ForumId: 1,
      location: "New York",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      username: "Katie",
      body: "started as lewd remarks, just now he tried to masturbate in front of me",
      // ForumId: 1,
      location: "Chicago",
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

