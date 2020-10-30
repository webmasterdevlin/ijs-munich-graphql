const tableEvents = "events";

const resolvers = {
  events: async (args, context, info) => {
    const { db } = await context();

    return db.collection(tableEvents).find().toArray();
  },

  event: async (args, context, info) => {
    const { db } = await context();

    return db.collection(tableEvents).findOne(args.id);
  },

  editEvent: async ({ id, title, description }, context, info) => {
    const { db } = await context();

    return db
      .collection(tableEvents)
      .findOneAndUpdate(
        { id },
        { $set: { title, description } },
        { returnOriginal: false }
      )
      .then((resp) => resp.value);
  },
};

module.exports = resolvers;
