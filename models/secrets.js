var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Secrets = sequelize.define('secrets', {
    secrets: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    comments: {
      type: Sequelize.STRING,
    }
  });

secrets_db.sync();

module.exports = Secrets;