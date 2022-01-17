import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CHECK_TOKEN  } from './graphql'
import { SpinnerCircular } from 'spinners-react';

const CheckToken = (props) => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  
  const {loading, error, data} = useQuery(CHECK_TOKEN, {
    variables: {
      token
    },
    partialRefetch: true
  })

  if (loading) {
    return (
      <SpinnerCircular />
    )
  };

  if (error) return `Error! ${error.message}`;

  const decodedToken = data.checkToken
  console.log(decodedToken);
  if (!decodedToken) {
    history.push('/')
    return null
  } else {
    return (
      <>{props.children}</>
    )
  }
}

export default CheckToken