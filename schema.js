const typeDefs = `#graphql
  type Query {
    greet:String
    users:[User]
    singleUser(_id:ID!):User
    quotes:[Quote]
    individualQuote(by:ID!):[Quote]
  }
  type User{
    _id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]
  }
  type Quote{
    name:String
    by:ID
    createrName:String
  }
  type Token{
    token:String
  }
  type Mutation{
      signUpUser(newUser:userInput):User
      signInUser(userSignIn:userSignInInput):Token
  }

  input userInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
  }

  input userSignInInput{
    email:String!
    password:String!
  }

`;

export default typeDefs;
