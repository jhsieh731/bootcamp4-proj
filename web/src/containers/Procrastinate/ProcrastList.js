import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import { GET_ACTIVITIES } from './graphql'

const ProcrastList = ({ deleteTask, updateTask, query, user_id }) => {
 
  let list = ''
  // get tasks from database
  const { data: queryData, loading } = useQuery(GET_ACTIVITIES, {
    variables: {
      id: user_id
    },
    partialRefetch: true,
  })
  if(loading) {
    return SpinnerCircular
  }

  // filter by user search bar query if database query successful
  const buildList = (tasks) => {
    const mapped = tasks.filter(task => {
      return task.title.includes(query.trim().toLowerCase())
    })
    return mapped
  }
  if (queryData) {
    list = buildList(queryData.getActivities)
  }

  // generates list item component (html)
  const ListItem = ({ task }) => {
    return (
      <li>
        <button type="button" onClick={() => deleteTask({
          variables: {
            id: task.id
          },
          refetchQueries: () => [{
            query: GET_ACTIVITIES,
            variables: {
              id: user_id
            }
          }]
        })}>
          Delete Task
        </button>

        <button type="button" onClick={() => updateTask({
          variables: {
            id: task.id
          },
          refetchQueries: () => [{
            query: GET_ACTIVITIES,
            variables: {
              id: user_id
            }
          }]
        })}>
          Mark Complete
        </button>
        {task.title}
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

export default ProcrastList

