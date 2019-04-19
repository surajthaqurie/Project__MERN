((dbConnector) => {
  'use strict';
  const mongodbClient = require('mongodb').MongoClient;
  const { dbConfig } = require('../config/app.config');

  dbConnector.init = async (app) => {
    mongodbClient.connect(dbConfig.dbrl, { useNewUrlParser: true })
      .then(async (client) => {
        const db = client.db(`${dbConfig.db}`);
        global.db = db;
        console.log('Database Connection Sucessfully');

        // super user check and create here  and data are imported by process.env variables

      })
      .catch((err) => {
        console.log('DataBase Connection Denied', err.stack);
      })
  }
})(module.exports);
