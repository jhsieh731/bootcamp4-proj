import gql from 'graphql-tag'

// export const GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK = gql`
//   query QUERYNAME($VARIABLE: TYPE!) {
//     QUERYNAME(SCHEMAVAR: $VARIABLE) {
//        DESIRED_VAR_NAMES,
// }
//   }
// `

// mutation deleteTask($id: ID!) {
//   deleteTask(id: $id) {
//     title
//   }
// }

// mutation addTask($userInput: AddTaskInput!) {
//   addTask(input: $userInput) {
//     title
//     type
//     UserId
//     id
//   }
// }

// mutation update($id: ID!) {
//   updateTask(id: $id) {
//     title
//     status
//   }
// }

// query getTasks($id: ID!) {
//   getTasks(user_id: $id) {
//     title
//     type
//     status
//     id
//     UserId
//   }
// }