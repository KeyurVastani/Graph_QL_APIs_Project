import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
  mutation SignUpUser($newUser: userInput) {
    signUpUser(newUser: $newUser) {
      _id
      email
      firstName
      lastName
      password
    }
  }
`;
