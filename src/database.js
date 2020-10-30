const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

let database = null;
const tableEvents = "events";

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString();

  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!database) {
    database = connection.db();
    await database.collection(tableEvents).insertMany([
      {
        id: 1,
        title: "GraphQL for JS developers #1",
        description: "Introductory to GrahQL",
        date: "2020-11-10T08:00:00+00:00",
        attendants: [
          {
            id: 1,
            name: "Naturo",
            age: 14,
          },
          {
            id: 2,
            name: "Sasuke",
            age: 14,
          },
        ],
      },
      {
        id: 2,
        title: "Apollo Client for JS developers #2",
        description: "Introduction to Apollo Client",
        date: "2020-12-06T08:00:00+00:00",
        attendants: [
          {
            id: 3,
            name: "Luffee",
            age: null,
          },
        ],
      },
    ]);
  }

  return database;
}

module.exports = startDatabase;
