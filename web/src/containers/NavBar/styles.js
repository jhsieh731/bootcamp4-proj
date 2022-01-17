import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const FlexBox = styled.div `
  display: flex;
  flex-direction: row;
  background: lightblue;
`

export const Link = styled(NavLink) `
  color: black;
  margin-top: 1em;
  margin-bottom: 0em;
  padding: 0.25em 1.0em 0em;
  text-decoration: none;

  &:hover {
      color: gray;
    }
`