import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';


//create a schema
const typeDefs = `#graphql
  type Query {
    greet: String
  }
`;

const resolvers={
  Query:{
        greet:()=>"hello world"
  }
}

const server=new ApolloServer({typeDefs,resolvers})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);