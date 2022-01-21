import gql from 'graphql-tag'

export const GET_FRIENDS = gql`
  query getFriends($id: ID!) {
    friendship(id: $id) {
       friend1
       friend2
       status
    }
  }
`

export const PENDING = gql`
  query pendingFriend($id: ID!) {
    pendingFriend(id: $id) {
       friend1
       friend2
    }
  }
`

export const REQUESTED = gql`
  query requestedFriend($id: ID!) {
    requestedFriend(id: $id) {
       friend1
       friend2
    }
  }
`

export const USERNAME = gql`
  query user($id:ID!) {
    user(id:$id) {
      email
      tasks {
        title
      }
    }
  }
`
export const ADD_FRIEND = gql`
  mutation addFriend($input: AddFriendshipInput!) {
    addFriendship(input: $input) {
      friend1
      friend2
    }
  }
`

export const UPDATE_FRIEND = gql`
  mutation updateFriend($input: UpdateFriendshipInput!){
    updateFriendship(input: $input) {
      status
    }
  }
`

export const DELETE_FRIEND = gql`
  mutation deleteFriend($input:DeleteFriendInput!) {
    deleteFriendship(input: $input) {
      friend1
      friend2
    }
  }
`

export const FRIEND_COMPLETED = gql`
  query getCompleted($id: ID!) {
    getCompleted(user_id: $id) {
      id
    }
  }
`

export const USERBYEMAIL = gql`
  query userByEmail($email:String!) {
    userByEmail(email: $email) {
      id
    }
  }
`

export const GET_USER = gql`
  query user($id:ID!) {
    user(id: $id) {
      email
    }
  }
`