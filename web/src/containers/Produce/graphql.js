import gql from 'graphql-tag'

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      title
      id
    }
  }
`

export const ADD_TASK = gql`
  mutation addTask($taskInput: AddTaskInput!) {
    addTask(input: $taskInput) {
      title
      id
    }
  }
`

export const UPDATE_TASK = gql`
  mutation update($id: ID!) {
    updateTask(id: $id) {
      title
      id
    }
  }
`

export const GET_TASKS = gql`
  query getTasks($id: ID!) {
    getTasks(user_id: $id) {
      title
      id
    }
  }
`

