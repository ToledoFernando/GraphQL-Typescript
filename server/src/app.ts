import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import http from "http";
import { typeDefs } from "./graphql/typedef";
import { resolvers } from "./graphql/resolver";

export const startApollo = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  httpServer.listen({ port: 4000 }, () =>
    console.log("Server on port 4000 => http://localhost:4000")
  );
};
