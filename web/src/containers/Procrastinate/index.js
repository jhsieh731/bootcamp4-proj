import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import CheckToken from "../CheckToken"

const Procrastinate = () => {
  const user_id = localStorage.getItem('user_id')
  
  return (
    <CheckToken>
      <div>Procrastinate</div>
    </CheckToken>
  )
}



export default Procrastinate
