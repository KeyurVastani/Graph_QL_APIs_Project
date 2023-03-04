import { users, quotes } from "./fakeData.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";
const User = mongoose.model("User");

const resolvers = {
  Query: {
    users: () => users,
    greet: () => "Keyur vastani",
    quotes: () => quotes,
    singleUser: (_, args) => users.find((user) => user._id === args._id),
    individualQuote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  Mutation: {
    signUpUser: async (_, { newUser }) => {
      const user = await User.findOne({ email: newUser.email });
      if (user) {
        throw new Error("This email already registered");
      }
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      const newUserData = new User({
        ...newUser,
        password: hashedPassword,
      });
      return await newUserData.save();
    },
    signInUser: async (_, { userSignIn }) => {
      const user = await User.findOne({ email: userSignIn.email });
      if (!user) {
        throw new Error("User doesn't exist with this email");
      }
      const isMatch = await bcrypt.compare(userSignIn.password, user.password);
      if (!isMatch) {
        throw new Error("email or password is invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
  },
  User: {
    quotes: (parentUser) =>
      quotes.filter((quote) => quote.by === parentUser._id),
  },
  Quote: {
    createrName: (quote) => {
      const { firstName } = users.find((user) => user._id === quote.by);
      return firstName;
    },
  },
};

export default resolvers;
