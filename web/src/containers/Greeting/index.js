import React from 'react'
import CheckToken from "../CheckToken"

const Greeting = () => {
  const user_id = localStorage.getItem('user_id')
  
  return (
    <CheckToken>
      <div>Welcome to the DEV React starter!</div>
    </CheckToken>
  )
}

export default Greeting
