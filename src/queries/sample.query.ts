import { graphql } from "gql.tada";

export const fragment_user = graphql(`
  fragment fragment_user on User {
    id
    name
  }
`);

export const fragment_admin = graphql(`
  fragment fragment_admin on User {
    id
    name
    access
  }
`);


export const myQuery = graphql(`
  query {
    myQuery {
      users {
      __typename
      ...fragment_admin
      ...fragment_user
      ... on UserNotFound {
        message
      }
    }
    }
  }
`, [fragment_user,fragment_admin]);


