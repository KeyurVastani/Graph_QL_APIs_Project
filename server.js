import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { users} from './fakeData.js'

//create a schema
const typeDefs = `#graphql
  type Query {
    greet:String
    users:[User]
  }

  type User{
    id:ID
    firstName:String
    lastName:String
    email:String
  }
`;

const resolvers={
  Query:{
        users:()=>users,
        greet:()=>"Keyur vastani"
  }
}

const server=new ApolloServer({typeDefs,resolvers})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);