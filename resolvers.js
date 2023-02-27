import { users, quotes } from "./fakeData.js";
import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: () => users,
    greet: () => "Keyur vastani",
    quotes: () => quotes,
    singleUser: (_, args) => users.find((user) => user.id === args.id),
    individualQuote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  Mutation: {
    signUpDummyUser: (_, { newUser }) => {
      const id = randomBytes(5).toString("hex");
      console.log("id======", id);
      users.push({ id, ...newUser});
      return users.find((user) => user.id === id);
    },
  },
  User: {
    quotes: (parentUser) =>
      quotes.filter((quote) => quote.by === parentUser.id),
  },
  Quote: {
    createrName: (quote) => {
      const { firstName } = users.find((user) => user.id === quote.by);
      return firstName;
    },
  },
};

export default resolvers;
