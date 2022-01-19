import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from './graphql'
import { SpinnerCircular } from 'spinners-react'
import { CenterElement, LoginButton, LoginField, ColBox, Attributes } from './styles'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email, 
      password
    },
    onCompleted: ({ login: { token, user: { id } }}) => {
      console.log("completed")
      localStorage.setItem('token', token)
      localStorage.setItem('user_id', id)
      history.push('/greeting')
    },
    onError: (error) => {
      console.log(error);
    }
  })

  if (loading) {
    return (
      <ColBox>
        <SpinnerCircular />
      </ColBox>
    )
  }

  const register = () => {
    history.push('/register')
  }

  const errorComponent = error && (
    <p>Login error</p>
  )

  return (
    <CenterElement>
      <ColBox><h1>Welcome to Procrastinate with Purpose:)</h1></ColBox>
      <form onSubmit={(e) => {
        e.preventDefault()
        login()
      }}>
        <ColBox>
          <LoginField
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </ColBox>
        <ColBox>
          <LoginField
            type="password"
            placeholder="password"
            value={ password }
            onChange={e => setPassword(e.target.value)}
          />
        </ColBox>
        <ColBox>
          <LoginButton type="submit">Log In</LoginButton>
        </ColBox>
      </form>
      <ColBox>
        { errorComponent }
      </ColBox>
      <ColBox>
        <p>No account? Register here!</p>
      </ColBox>
      <ColBox>
        <LoginButton type="button" onClick={ register }>Register New Account</LoginButton>
      </ColBox>
      <ColBox />
      <Attributes>
        Data from openweathermap.org and Bored API.
      </Attributes>
      <Attributes>
        Created by Jocelyn Hsieh, Vik Kethamukkala, Caleb Painter, Lydia Shimelis, and Catherine Stanton.
      </Attributes>
    </CenterElement>
  )
}

export default Login