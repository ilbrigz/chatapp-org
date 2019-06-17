const dotenv = require("dotenv");
const { Seeder } = require("mongo-seeding");
const path = require('path')
dotenv.config();
// seed databse
const seeder = new Seeder({
  database: process.env.MONGO_URI,
  dropDatabase: true
});


const collections = seeder.readCollectionsFromPath(path.join(__dirname, "data"));

seeder.import(collections);