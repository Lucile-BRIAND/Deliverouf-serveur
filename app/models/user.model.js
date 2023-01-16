module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Token: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };