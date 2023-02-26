import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { users,quotes} from './fakeData.js'

//create a schema
const typeDefs = `#graphql
  type Query {
    greet:String
    users:[User]
    singleUser(id:ID!):User
    quotes:[Quote]
    individualQuote(by:ID!):[Quote]
  }

  type User{
    id:ID!
    firstName:String
    lastName:String
    email:String
    quotes:[Quote]
  }
  type Quote{
    name:String
    by:ID
    createrName:String
  }
`;

const resolvers={
  Query:{
        users:()=>users,
        greet:()=>"Keyur vastani",
        quotes:()=>quotes,
        singleUser:(_,args)=>users.find(user=>user.id===args.id),
        individualQuote:(_,{by})=>quotes.filter(quote=>quote.by===by)
  },
  User:{
    quotes:(parentUser)=>quotes.filter((quote)=>quote.by===parentUser.id)
  },
Quote:{
  createrName:(quote)=> {
    const {firstName}=users.find(user=>user.id===quote.by)
    return firstName
  }
},
}

const server=new ApolloServer({typeDefs,resolvers})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);