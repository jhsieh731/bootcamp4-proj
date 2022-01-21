import React from 'react'
import { GET_FRIENDS } from './graphql'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import UsernameLI from './UsernameLI'
import { ActualFriends } from './styles'

const Friends = ({ user_id }) => {
  let list = ''
  // get friendships from database
  const { data, loading } = useQuery(GET_FRIENDS, {
    variables: {
      id: user_id,
    },
    partialRefetch: true,
  })
  if(loading) {
    return <SpinnerCircular />
  }

  // filter to only include "other" friend
  const filteredList = (friendships) => {
    const mapped = friendships.map(friendship => {
      if(friendship.friend1 === user_id) {
        return friendship.friend2;
      }
      return friendship.friend1;
    })
    return mapped
  }
  if (data) {
    list = filteredList(data.friendship)
  }

  // generate list
  const fullList = (list) => (
    <ul>
      {list.length > 0 ? list.map(id => <UsernameLI friend_id={id} key = {id} user_id={user_id} page="friends"/>) : "No friends to show"}
    </ul>
  )

  return (
    <ActualFriends>
      <h4>Your friends: </h4>
      {fullList(list)}
    </ActualFriends>
  )
}

export default Friends