const seeder = require('mongoose-seed');
const { join } = require('path');
const connectDB = require('../db-config');
const seedData = require('./SeedData');

(async () => {

  seeder.connect(await connectDB(), () => {
    // Load Mongoose models
    seeder.loadModels([join('src/schema/manager-schema')]);

    seeder.clearModels(['manager'], () => {

      seeder.populateModels(seedData, () => {
        seeder.disconnect();
      });
    });
  });
})();
