import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from './graphql'
import { SpinnerCircular } from 'spinners-react';

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [register, { data, loading, error }] = useMutation(REGISTER, {
    variables: {
      registerUser: {
        email, 
        password,
      },
    },
    onCompleted: ({ register: { token } }) => {
      console.log("completed")
      localStorage.setItem('token', token)
      history.push('/home')
    },
    onError: (error) => {
      // console.log(error);
    }
  })

  if (loading) {
    return (
      <SpinnerCircular />
    )
  }
  const errorComponent = error && (
    <p>Registration error</p>
  )

  return (
    <div>
      <p>Make a new account:</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        register()
      }}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {errorComponent}
    </div>
  )
}

export default Register