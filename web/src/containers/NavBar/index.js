import {FlexBox, Link} from './styles'
import React from 'react'

const NavBar = () => {
  return (
    <FlexBox>
        <Link to ="/greeting">Greeting</Link>
        <Link to="/produce">Produce</Link>
        <Link to="/procrastinate">Procrastinate</Link>
        <Link to="/social">Social</Link>
    </FlexBox>
  )
}

export default NavBar;