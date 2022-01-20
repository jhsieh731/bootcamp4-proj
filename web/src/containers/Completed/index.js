import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import { GET_COMPLETED } from './graphql'

const CompletedList = ({ query, user_id }) => {
 
  let list = ''
  // get tasks from database
  const { data: queryData, loading } = useQuery(GET_COMPLETED, {
    variables: {
      id: user_id
    },
    partialRefetch: true,
  })
  if(loading) {
    return SpinnerCircular
  }

  // filter by user search bar query if database query successful
  const buildList = (completed) => {
    const mapped = completed.filter(completed => {
      return completed.title.includes(query.trim().toLowerCase())
    })
    return mapped
  }
  if (queryData) {
    list = buildList(queryData.getCompleted)
  }

  // make complete list of queried results (or "no result")
  return (
    <ul>
      {list.length > 0 ? list.map(task => <ListItem completed_task={task} key={task.id} />) : "No results"}
    </ul>
  )
}

export default CompletedList

