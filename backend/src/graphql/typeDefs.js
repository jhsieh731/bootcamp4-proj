const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    checkToken(token: String!): Boolean!
    user(id:ID!): User!
    task(id:ID!): Task!
    allUsers: [User!]!
    allTasks: [Task!]
    allFriendships: [Friendship!]!
    friendships: [Friendship!]
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    tasks: [Task!]
    friendships: [Friendship!]
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
    addTask(input:AddTaskInput): Task!
    addUser(input: AddUserInput): User!
    addFriendship(input:AddFriendshipInput): Friendship!
  }

  input AddTaskInput {
    title: String!
    type: String! 
    UserId: ID!
    status: String!
  }

  input AddUserInput {
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  input AddFriendshipInput {
    Friend1_id: ID!
    Friend2_id: ID!
    Status: String!
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`

