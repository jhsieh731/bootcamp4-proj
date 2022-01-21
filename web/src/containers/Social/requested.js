import React, { useState } from 'react'
import { ADD_FRIEND, GET_FRIENDS, REQUESTED, USERBYEMAIL } from './graphql'
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks'
import { SpinnerCircular } from 'spinners-react'
import UsernameLI from './UsernameLI'

const shouldAddFriend = (queryData, requestData, user_id, friendData) => {
  const friend_id = queryData.userByEmail.id
  const inRequested = requestData.requestedFriend.filter(friendship => {
    return friendship.friend1 === user_id && friendship.friend2 === friend_id
  }).length
  const inFriends = friendData.friendship.filter(friendship => {
    return (friendship.friend1 === user_id && friendship.friend2 === friend_id)
      || (friendship.friend1 === friend_id && friendship.friend2 === user_id)
  }).length
  return (inRequested === 0 && inFriends === 0)
}

const Friends = ({ user_id }) => {
  const [request, setRequest] = useState('')
  const [formSubmit, setFormSubmit] = useState(false)
  let list = ''

  // get requested friendships from database
  const { data: requestData, loading: requestLoading } = useQuery(REQUESTED, {
    variables: {
      id: user_id,
    },
    partialRefetch: true,
  })

  const { data:friendData, loading:friendLoading } = useQuery(GET_FRIENDS, {
    variables: {
      id: user_id,
    },
    partialRefetch: true,
  })

  const [getUser, { data: queryData, loading: queryLoading }] = useLazyQuery(USERBYEMAIL)

  const [mutAddFriend, { loading: addLoading}] = useMutation(ADD_FRIEND, {
    variables: {
      input: {
        friend1: user_id,
        friend2_email: request
      }
    },
    refetchQueries: () => [
    {
      query: REQUESTED,
      variables: {
        id: user_id
      }
    },
    {
      query: GET_FRIENDS,
      variables: {
        id: user_id
      }
    }],
    onError: (error) => {
      return `Friend could not be added, ${error}`
    },
  })

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
  if (requestData) {
    list = filteredList(requestData.requestedFriend)
  }

  // generate list
  const fullList = (list) => (
    <ul>
      {list.length > 0 ? list.map(id => <UsernameLI friend_id={id} key = {id} user_id={user_id} page="requested"/>) : "No friends to show"}
    </ul>
  )

  if (queryData && requestData && friendData && formSubmit) {
    setFormSubmit(false)
    if (shouldAddFriend(queryData, requestData, user_id, friendData)) {
      mutAddFriend()
    }
    setRequest('')
  }

  if (requestLoading || friendLoading || queryLoading || addLoading) {
    return <SpinnerCircular />
  }

  return (
    <div>
      Requested friends: 
      {fullList(list)}
      <form onSubmit={e => {
        e.preventDefault()
        setFormSubmit(true)
        getUser({
          variables: {
            email: request
          }
        })
      }}>
        <input 
          type="text" 
          value={request}
          onChange={e => setRequest(e.target.value)}
        />
        <button type="submit">Send friend request</button>
      </form>
    </div>
  )
}

export default Friends


