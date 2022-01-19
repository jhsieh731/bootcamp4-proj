const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    checkToken(token: String!): Boolean!
    user(id:ID!): User!
    task(id:ID!): Task!
    allTasks: [Task!]
    allFriendships: [Friendship!] 
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    tasks: [Task!]
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
    Friend1_id: ID!
    Friend2_id: ID!
    Status: String!
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

