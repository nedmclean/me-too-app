module.exports = {
  up(queryInterface, Sequelize) {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkInsert('Forums', [{
<<<<<<< HEAD
      title: "I'm Here! (counted by region)",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    },                                {
      title: "Share Your Story",
=======
      title: "Bright future",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    }, {
      title: "We are here together",
>>>>>>> c3bf1850a76a6552e8f6f76dd5b0ddd533d4d3d6
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    },                                {
      title: "Emergency Services",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))
    },                                {
      title: "Know Your Rights",
      createdAt: Sequelize.fn(('NOW')),
      updatedAt: Sequelize.fn(('NOW'))


    }], {});
  },

  down(queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Forums', null, {});
  }
};
