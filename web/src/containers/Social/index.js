import React from 'react'
import CheckToken from '../CheckToken'
import Friends from './friends'
import Pending from './pending'
import Requested from './requested'

const Social = () => {
  const user_id = localStorage.getItem('user_id')

  return (
    <CheckToken>
      <Friends user_id={user_id} />
      <Pending user_id={user_id} />
      <Requested user_id={user_id} />
    </CheckToken>
  )
}

export default Social
