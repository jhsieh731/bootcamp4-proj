import React from 'react'
import CheckToken from '../CheckToken'

const Social = () => {
  const user_id = localStorage.getItem('user_id')

  return (
    <CheckToken>
      <div>Social</div>
    </CheckToken>
  )
}

export default Social
