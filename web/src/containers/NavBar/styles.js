import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const FlexBox = styled.div `
  display: flex;
  flex-direction: row;
  background: #2E294E;
`

export const Link = styled(NavLink) `
  color: white;
  font-size: large;
  font-weight: bold;
  font-family: 'Lato', sans-serif;  
  margin-left: 1em;
  margin-top: 15px;
  margin-bottom: 1em;
  padding: 1em;
  text-decoration: none;

  &:hover {
      color: gray;
    }
`

export const NiceButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
  margin-top: 18px;
  margin-left: auto; 
  margin-right: 40px;

  &:hover {
    background: #F6F9FE;
    color: #174ea6;
    }



`