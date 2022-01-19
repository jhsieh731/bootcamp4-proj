import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from './graphql'
import { SpinnerCircular } from 'spinners-react';
import { NiceRegisterBox, Background, NiceInput, NiceForm, GoodBox, RegisterButton } from './styles'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [register, { loading, error }] = useMutation(REGISTER, {
    variables: {
      registerUser: {
        email, 
        password,
      },
    },
    onCompleted: ({ register: { token, user: { id } } }) => {
      console.log("completed")
      localStorage.setItem('token', token)
      localStorage.setItem('user_id', id)
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
  const errorComponent = error && (
    <p>Registration error</p>
  )

  return (
    <Background>
      <NiceRegisterBox>
        <GoodBox>
      <NiceForm onSubmit={(e) => {
        e.preventDefault()
        register()
      }}>
        <NiceInput
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <NiceInput
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <RegisterButton type="submit">Register</RegisterButton>
      </NiceForm>
      {errorComponent}
      </GoodBox>
      </NiceRegisterBox>
    </Background>
  )
}

export default Register