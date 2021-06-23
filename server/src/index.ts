require("dotenv").config();
import express, { Application } from "express";
import { IHome } from "./lib/types";
import _homes from "./mockData/homes.json";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const mount = async (app: Application) => {
  //load mock data json
  console.log("reading mock data...");
  const listings: IHome[] = _homes;
  console.log("reading mock done!");

  app.use(cors({ credentials: true, origin: `${process.env.PUBLIC_URL}` }));
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ listings, req, res }),
  });
  server.applyMiddleware({
    app,
    path: "/api",
    cors: { origin: `${process.env.PUBLIC_URL}`, credentials: true },
  });

  app.listen(PORT, () =>
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port: http://localhost:${PORT}`
    )
  );
};

mount(express());
