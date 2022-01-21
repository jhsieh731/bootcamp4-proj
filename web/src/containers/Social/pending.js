import React from 'react'
import { PENDING } from './graphql'
import { useQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import UsernameLI from './UsernameLI'

const Pending = ({ user_id }) => {
  let list = ''
  // get friendships from database
  const { data, loading } = useQuery(PENDING, {
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
    list = filteredList(data.pendingFriend)
  }

  // generate list
  const fullList = (list) => (
    <ul>
      {list.length > 0 ? list.map(id => <UsernameLI friend_id={id} key = {id} page="pending" user_id={user_id}/>) : "No friends to show"}
    </ul>
  )

  return (
    <div>
      Pending friends:
      {fullList(list)}
    </div>
  )
}

export default Pending