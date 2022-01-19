import React, { useState } from 'react'
import CheckToken from '../CheckToken'
import { useMutation } from '@apollo/react-hooks'
import AddTask from './AddTask'
import ProduceList from './ProduceList'
import { SpinnerCircular } from 'spinners-react'

const Produce = () => {
  const user_id = localStorage.getItem('user_id')
  const [query, setQuery] = useState('')

  const [deleteTask, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_TASK, {
    variables: {
      task_id
    },
    refetchQueries: () => [{ query: GET_TASKS }],
    onError: (error) => {
      // console.log(error);
    }
  })
  if (deleteLoading) return SpinnerCircular
  if (deleteError) return `Submission error! ${deleteError.message}`

  const [addTask, { loading: addLoading, error: addError }] = useMutation(ADD_TASK, {
    refetchQueries: () => [{ query: GET_TASKS }],
  })
  if (addLoading) return SpinnerCircular
  if (addError) return `Submission error! ${error.message}`

  const [updateTask, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_TASK, {
    refetchQueries: () => [{ query: GET_TASKS }],
  })
  if (updateLoading) return SpinnerCircular
  if (updateError) return `Submission error! ${error.message}`

  return (
    <CheckToken>
      <input type="text"
        name="userInput"
        placeholder="Query"
        value={query}
        onChange={e => setQuery(e.target.value)} />
      <ProduceList deleteTask={deleteTask} query={query} updateTask={updateTask}/>
      <AddTask onAddTask={addTask}/>
    </CheckToken>
  )
}
export default Produce