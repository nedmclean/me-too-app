module.exports = {
  up(queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert('Posts', [{
<<<<<<< HEAD
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
=======
      username: "Sabrina",
      body: "Peace of Mind is My Priority",
      // ForumId: 1,
      location: "Memphis",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      username: "Catherine",
      body: "Saying No and Meaning It.",
      // ForumId: 1,
      location: "France",
>>>>>>> c3bf1850a76a6552e8f6f76dd5b0ddd533d4d3d6
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

