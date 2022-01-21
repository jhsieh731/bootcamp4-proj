import React, { useState } from 'react'
import { GET_TASKS } from './graphql'
import { BestBarDiv, BestInput, AddButton } from './styles'

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
    <BestBarDiv>
    <form onSubmit={addTask}>
      <BestInput
        type="text"
        name="newTask"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <AddButton type="submit">Submit</AddButton>
    </form>
    </BestBarDiv>
  )
}

export default AddTask