import React from 'react'
import CheckToken from '../CheckToken'
import Friends from './friends'
import Pending from './pending'
import Requested from './requested'
import { useQuery } from '@apollo/react-hooks'
import { FRIEND_COMPLETED, GET_USER } from './graphql'
import { SpinnerCircular } from 'spinners-react'
import { Container, YourselfBox, FriendsBox, SelfInfoDiv } from './styles'

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
        <SelfInfoDiv>
          <h2>YOU!</h2>
          <p>Email/Username: {userData.user.email}</p>
          <p>Tasks Completed: {countData.getCompleted.length}</p>
        </SelfInfoDiv>
      )
    }
    if (countLoading && userLoading) return <SpinnerCircular />
    return ("Data not found")
  }

  return (
    <CheckToken>
      <Container>
        <YourselfBox>
          <Self />
        </YourselfBox>
        <FriendsBox>
          <Friends user_id={user_id} />
          <Pending user_id={user_id} />
          <Requested user_id={user_id} />
        </FriendsBox>
      </Container>
    </CheckToken>
  )
}

export default Social
