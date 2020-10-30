const express = require("express");
const { graphqlHTTP } = require("express-graphql");

// TODO: write schema
const schema = require("./schema");

// TODO: build express playground or the built-in web IDE
const expressPlayground = require("graphql-playground-middleware-express")
  .default;

// TODO: start the database
const startDatabase = require("./database");

// TODO: write resolvers
const resolvers = require("./resolvers");

const app = express();

// TODO: write the context
const context = async () => {
  const db = await startDatabase();

  return { db };
};

// TODO: add or use the GraphQL HTTP
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    context: context,
    rootValue: resolvers,
  })
);

// TODO: Enable the express graphql playground
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

const PORT = 4000;

app.listen(PORT);

console.log(`GraphQL Server is ready at http://localhost:${PORT}/graphql`);
