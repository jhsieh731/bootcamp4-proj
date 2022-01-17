import gql from 'graphql-tag'

export const CHECK_TOKEN = gql`
  query checkToken($token: String!) {
    checkToken(token: $token)
  }
`