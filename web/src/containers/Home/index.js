import { useQuery } from '@apollo/react-hooks'
import { decode } from 'jsonwebtoken'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CHECK_TOKEN  } from './graphql'

const Home = () => {
  const history = useHistory()

  const token = localStorage.getItem('token')
  const {loading, error, data} = useQuery(CHECK_TOKEN, {
    variables: {
      token
    },
    partialRefetch: true
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const decodedToken = data.checkToken
  console.log(decodedToken);
  if (!decodedToken) {
    history.push('/')
  }

  return (
    <div>Welcome to the DEV React starter!</div>
  )
}



export default Home
