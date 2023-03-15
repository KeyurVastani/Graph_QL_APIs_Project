import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET, MONGO_URI } from "./config.js";

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected =================== success");
});

mongoose.connection.on("error", (err) => {
  console.log("coonection error================error", err);
});

//import modal here
import "./modal/Quotes.js";
import "./modal/User.js";

//first declare modal because we use modal in resolver
import resolvers from "./resolvers.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const context = async ({ req }) => {
  const token = req.headers.authorization || "";
  if (token) {
    const { userId } = jwt.verify(token, JWT_SECRET);
    return { userId };
  }
};

const { url } = await startStandaloneServer(server, {
  context,
  // also write context here
  // context: async ({ req }) => {
  //   console.log("req header====", req);
  //   const { authorizatinon } = req.header;
  //   if (authorizatinon) {
  //     const { userId } = await jwt.verifty(authorizatinon, JWT_SECRET);
  //     return { userId };
  //   }
  // },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
