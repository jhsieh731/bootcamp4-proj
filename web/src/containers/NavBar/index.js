import {FlexBox, Link, NiceButton} from './styles'
import React from 'react'
import client from '../../client'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()

  const logout = () => {
    client.resetStore()
    localStorage.clear()
    alert("Logged out")
    history.push("/")
  }
  return (
    <FlexBox>
        <Link to ="/greeting">Home</Link>
        <Link to="/produce">Produce</Link>
        <Link to="/procrastinate">Procrastinate</Link>
        <Link to="/completed">Completed</Link>
        <Link to="/social">Social</Link>
        <NiceButton type="button" onClick={logout}>Log Out</NiceButton>
    </FlexBox>
  )
}

export default NavBar;