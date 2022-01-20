import React, { useState } from 'react'
import CheckToken from '../CheckToken'
import { useMutation } from '@apollo/react-hooks'
import AddTask from './AddTask'
import ProcrastList from './ProcrastList'
import { SpinnerCircular } from 'spinners-react'
import { DELETE_TASK, ADD_TASK, UPDATE_TASK } from './graphql'

const Procrastinate = () => {
  const user_id = localStorage.getItem('user_id')
  const [query, setQuery] = useState('')

  const [addTask, { loading: addLoading }] = useMutation(ADD_TASK, {
    onError: (error) => `Submission error! ${error.message}`,
  })

  const [deleteTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    onError: (error) => `Submission error! ${error.message}`
  })

  const [updateTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    onError: (error) => `Submission error! ${error.message}`
  })

  if (updateLoading || deleteLoading || addLoading) return SpinnerCircular

  return (
    <CheckToken>
      <input type="text"
        name="userInput"
        placeholder="Query"
        value={query}
        onChange={e => setQuery(e.target.value)} />
      <ProcrastList deleteTask={deleteTask} query={query} updateTask={updateTask} user_id={user_id} />
      <AddTask onAddTask={addTask} user_id={user_id} />
    </CheckToken>
  )
}
export default Procrastinate