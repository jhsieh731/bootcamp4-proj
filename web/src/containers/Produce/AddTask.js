import React, { useState } from 'react'
import { GET_TASKS } from './graphql'

const AddTask = ({ onAddTask, user_id }) => {
  const [newTask, setNewTask] = useState('')

  const addTask = e => {
    e.preventDefault()
    onAddTask({
      variables: {
        taskInput: {
          title: newTask.toLowerCase(),
          type: 'task',
          UserId: user_id,
        }
      },
      // update: (client, { data: { addTask } }) => {
      //   const data = client.readQuery({ query: GET_TASKS })
      //   data.getTasks = [...data.getTasks, addTask]
      //   client.writeQuery({ query: GET_TASKS, data })
      // },
      refetchQueries: () => [{ 
        query: GET_TASKS, 
        variables: {
          id: user_id
        } 
      }],

    })
    setNewTask('')
  }

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Task name"
        name="newTask"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddTask