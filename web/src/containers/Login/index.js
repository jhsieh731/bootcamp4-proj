import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'
import { SpinnerCircular } from 'spinners-react';

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email, 
      password
    },
    onCompleted: ({ login: { token } }) => {
      console.log("completed")
      localStorage.setItem('token', token)
      history.push('/greeting')
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

  const register = () => {
    history.push('/register')
  }

  const errorComponent = error && (
    <p>Login error</p>
  )

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        login()
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
        <button type="submit">Log In</button>
      </form>
      {errorComponent}
      <div>
        <p>No account? Register here!</p>
        <button type="button" onClick={register}>Register New Account</button>
      </div>
    </div>
  )
}

export default Login