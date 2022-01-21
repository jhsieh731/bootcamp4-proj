import { useQuery, useMutation } from "@apollo/react-hooks"
import React from "react"
import { SpinnerCircular } from "spinners-react"
import { USERNAME, UPDATE_FRIEND, DELETE_FRIEND, GET_FRIENDS, PENDING, FRIEND_COMPLETED } from "./graphql"
import { BestLi, BestP, BestTask, DelFriendBtn, AccButton, RejButton} from "./styles"

const UsernameLI = ({ friend_id, page, user_id }) => {
  // get friend emails/usernames
  const { data, loading, error } = useQuery(USERNAME, {
    partialRefetch: true,
    variables: {
      id: friend_id
    }
  })

  // get friend's total tasks completed
  const { data: countData, loading: countLoading } = useQuery(FRIEND_COMPLETED, {
    partialRefetch: true,
    variables: {
      id: friend_id
    }
  })

  // accept request (UPDATE)
  const [accept, { loading: acceptLoading }] = useMutation(UPDATE_FRIEND, {
    variables: {
      input: {
        friend1: friend_id,
        friend2: user_id
      }
    },
    refetchQueries: () => [{ 
      query: GET_FRIENDS, 
      variables: {
        id: user_id
      } 
    },
      {
        query: PENDING,
        variables: {
          id: user_id
        }
      }],
      onError: (error) => {
        console.log(error);
      }
  })

  // reject request (DELETE)
  const [reject, { loading: rejectLoading }] = useMutation(DELETE_FRIEND, {
    variables: {
      input: {
        friend1: friend_id,
        friend2: user_id
      }
    },
    refetchQueries: () => [{ 
      query: GET_FRIENDS,
      variables: {
        id: user_id
      }
    },
      {
        query: PENDING,
        variables: {
          id: user_id
        } 
      },
    ],
    onError: (error) => {
      console.log(error);
    }
  })

  if (data && countData && page==="friends") {
    const count = countData.getCompleted.length
    return (
      <BestLi>
        <BestP>{data.user.email}</BestP>
        <BestTask>Tasks completed: {count}
        <DelFriendBtn type="button" onClick={reject}>Delete Friend</DelFriendBtn>
        </BestTask>
      </BestLi>
    )
  }
  if (data && page==="pending") {
    return (
      <BestLi>
        <BestP>{data.user.email}</BestP>
        <BestTask>
        <AccButton type="button" onClick={accept}>Accept</AccButton>
        <RejButton type="button" onClick={reject}>Reject</RejButton>
        </BestTask>
      </BestLi>
    )
  }
  if (data && page==="requested") {
    return (
      <BestLi>
        <BestTask>
        {data.user.email}
        </BestTask>
      </BestLi>
    )
  }
  if (loading || countLoading || acceptLoading || rejectLoading ) return <SpinnerCircular />
  if (error) return `Error loading friends: ${error}`
}

export default UsernameLI