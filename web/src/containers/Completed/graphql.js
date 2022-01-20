import gql from 'graphql-tag'

export const GET_COMPLETED = gql`
  query getCompleted($id: ID!) {
    getCompleted(user_id: $id) {
      title
      id
    }
  }
`
