import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation register($registerUser: RegisterInput!) {
    register(input: $registerUser) {
      user {
        id
      }
      token
    }
  }
`