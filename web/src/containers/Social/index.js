import React from 'react'
import CheckToken from '../CheckToken'
import Friends from './friends'
import Pending from './pending'
import Requested from './requested'
import { useQuery } from '@apollo/react-hooks'
import { FRIEND_COMPLETED, GET_USER } from './graphql'
import { SpinnerCircular } from 'spinners-react'

const Social = () => {
  const user_id = localStorage.getItem('user_id')
  const { data: countData, loading: countLoading } = useQuery(FRIEND_COMPLETED, {
    partialRefetch: true,
    variables: {
      id: user_id
    }
  })

  const { data: userData, loading: userLoading } = useQuery(GET_USER, {
    partialRefetch: true,
    variables: {
      id: user_id,
    },
  })

  const Self = () => {
    if (countData && userData) {
      return (
        <div>
          <p>YOU!</p>
          <p>Email/Username: {userData.user.email}</p>
          <p>Tasks Completed: {countData.getCompleted.length}</p>
        </div>
      )
    }
    if (countLoading && userLoading) return <SpinnerCircular />
    return ("Data not found")
  }

  return (
    <CheckToken>
      <Self />
      <Friends user_id={user_id} />
      <Pending user_id={user_id} />
      <Requested user_id={user_id} />
    </CheckToken>
  )
}

export default Social
