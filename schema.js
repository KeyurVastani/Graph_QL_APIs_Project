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
  type Mutation{
      signUpDummyUser(newUser:userInput):User
  }

  input userInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
  }
`;

export default typeDefs;
