import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import { GET_COMPLETED } from './graphql'
import { BestLi, BackgroundBox, CompleteButton} from '../Completed/styles'

const CompletedList = () => {
  const user_id = localStorage.getItem('user_id')
  let list = ''
  // get tasks from database
  const { data, loading, refetch } = useQuery(GET_COMPLETED, {
    variables: {
      id: user_id
    },
    partialRefetch: true,
  })
  if(loading) {
    return SpinnerCircular
  }

  const buildList = (list) => {
    const built = list.map(li => {
      return li.title
    })
    return built
  }

  if (data) {
    list = buildList(data.getCompleted)
    console.log(list);
  }

  const ListItem = ({ task }) => {
    return (
      <li>
        {task}
      </li>
    )
  }

  // make complete list of queried results (or "no result")
  return (
    <BackgroundBox>
      <BestLi>
        {list.length > 0 ? list.map(task => <ListItem task={task} key={task.id} />) : "No results"}
      </BestLi>
      <CompleteButton type="button" onClick={() => refetch()}>Update</CompleteButton>
    </BackgroundBox>
  )
}

export default CompletedList

