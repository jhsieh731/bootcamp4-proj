import React from 'react'
import CheckToken from '../CheckToken'

const Produce = () => {
  const user_id = localStorage.getItem('user_id')

  return (
    <CheckToken>
      <div>Produce</div>
    </CheckToken>
  )
}



export default Produce
