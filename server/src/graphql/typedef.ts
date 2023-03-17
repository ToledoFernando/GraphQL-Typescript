import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Acount {
    id: Int!
    first_name: String
    last_name: String
    email: String
    gender: String
    country: String
  }

  type DbAcount {
    _id: String
    first_name: String
    last_name: String
    email: String
    password: String
  }

  type Query {
    acount: [Acount]
    dbacount: [DbAcount]
    login(email: String, password: String): DbAcount
  }

  type Mutation {
    newUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): DbAcount
  }
`;
