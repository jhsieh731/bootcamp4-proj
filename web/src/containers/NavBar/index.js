import {FlexBox, Link} from './styles'
import React from 'react'
import client from '../../client'
import { useHistory } from 'react-router-dom'


const NavBar = () => {
  const token = localStorage.getItem('token')
  const history = useHistory()

  const logout = () => {
    client.resetStore()
    localStorage.clear()
    alert("Logged out")
    history.push("/")
  }
  return (
    <FlexBox>
        <Link to ="/greeting">Greeting</Link>
        <Link to="/produce">Produce</Link>
        <Link to="/procrastinate">Procrastinate</Link>
        <Link to="/social">Social</Link>
        <button type="button" onClick={logout}>Log Out</button>
    </FlexBox>
  )
}

export default NavBar;