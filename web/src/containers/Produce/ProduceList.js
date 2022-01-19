import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import { GET_TASKS } from './graphql'

const ProduceList = ({ deleteTask, updateTask, query }) => {

  // get tasks from database
  const { data: queryData, loading } = useQuery(GET_TASKS, {
    variables: {
      user_id
    },
    partialRefetch: true,
  })
  if(loading) {
    return SpinnerCircular
  }

  // filter by user search bar query if database query successful
  const buildList = (tasks) => {
    const mapped = tasks.filter(task => {
      return task.name.includes(query.trim())
    })
    return mapped
  }
  if (queryData) {
    list = buildList(queryData.tasks)
  }

  // generates list item component (html)
  const ListItem = ({ task }) => {
    return (
      <li>
        {task.name}
        <button type="button" onClick={() => deleteTask({
          variables: {
            task_id: task.id
          }
        })}>
          Delete Task
        </button>
        <button type="button" onClick={() => updateTask({
          variables: {
            task_id: task.id
          }
        })}>
          Mark Complete
        </button>
      </li>
    )
  }

  // make complete list of queried results (or "no result"), accounting for added/deleted tasks
  return (
    <ul>
      {list.length > 0 ? list.map(task => <ListItem task={task} key={task.id} />) : "No results"}
    </ul>
  )
}

export default ProduceList