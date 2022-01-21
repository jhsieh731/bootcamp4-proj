const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    checkToken(token: String!): Boolean!
    user(id:ID!): User!
    userByEmail(email:String!): User!
    task(id:ID!): Task!
    getTasks(user_id: ID!): [Task!]!
    getCompleted(user_id: ID!): [Task!]!
    getActivities(user_id: ID!): [Task!]!
    friendship(id: ID!): [Friendship!]!
    pendingFriend(id:ID!): [Friendship!]!
    requestedFriend(id:ID!): [Friendship!]!
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    title: String!
    type: String! 
    UserId: ID!
    status: String!
  }

  type Friendship {
    id: ID!
    friend1: ID!
    friend2: ID!
    status: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addTask(input: AddTaskInput!): Task!
    deleteTask(id: ID!): Task!
    updateTask(id: ID!): Task!
    addFriendship(input:AddFriendshipInput!): Friendship!
    deleteFriendship(input:DeleteFriendInput!): Friendship! 
    updateFriendship(input:UpdateFriendshipInput!): Friendship!
  }

  input AddTaskInput {
    title: String!
    type: String! 
    UserId: ID!
  }

  input AddFriendshipInput {
    friend1: ID!
    friend2_email: String!
  }

  input UpdateFriendshipInput {
    friend1: ID!
    friend2: ID!
  }

  input DeleteFriendInput {
    friend1: ID!
    friend2: ID!
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`

