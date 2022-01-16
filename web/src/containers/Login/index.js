import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      email, 
      password
    },
    onCompleted: ({ login: { token } }) => {
      console.log("completed")
      localStorage.setItem('token', token)
      history.push('/home')
    },
    onError: (error) => {
      // console.log(error);
    }
  })

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
    </div>
  )
}

export default Login