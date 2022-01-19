import React, { useState } from 'react'

const AddTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('')

  const addTask = e => {
    e.preventDefault()
    onAddTask({
      variables: {
        taskInput: {
          name: newTask
        }
      },
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