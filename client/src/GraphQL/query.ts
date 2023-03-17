import { gql } from "@apollo/client";

export const get_UserAcount = gql`
  query {
    acount {
      id
      first_name
      last_name
      country
      gender
      email
    }
  }
`;
