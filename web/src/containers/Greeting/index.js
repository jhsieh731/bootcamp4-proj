import React from 'react'
import CheckToken from "../CheckToken"
import { InfoBox } from "./styles"

const Greeting = () => {
  const user_id = localStorage.getItem('user_id')
  
  return (
    <CheckToken>
      <div>
        <InfoBox>
          Hello, World
        </InfoBox>
      </div>
      <div>Welcome to the DEV React starter!</div>
    </CheckToken>
  )
}

export default Greeting
