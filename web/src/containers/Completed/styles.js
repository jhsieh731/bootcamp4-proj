import styled from 'styled-components'
import img from './confetti.gif';

// export const BestLi = styled.li `
//   list-style-type: none;
//   width: 60%;
//   float: left;
//   padding-left: 10px;
//   margin-top: 3px;
//   height: 100%;
//   overflow:auto;
// `

export const BackgroundBox = styled.div`
  background-image: url(${img});
  background-color: #c1c8e4;
  border-radius: 4px;
  overflow: auto;
  padding: 10px;
  margin-left: -40px;
  height: 100vh;
`

export const GoodUl = styled.ul`
  text-align: center;
  list-style-position: inside;

`
export const Goodli = styled.li`
  padding: 5px;
  text-align: center;
`

export const CenterBox = styled.div`
  background-color: #2E294E;
  color: white;
  margin: auto;
  margin-top: 60px;
  width: 40%;
  border: none;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`

export const PushP = styled.h2`
  text-align: center;
  font-weight: bold;
`

export const CompleteButton = styled.button`
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
  margin:0 auto;
    display:block;
    margin-top: 20px;

  &:hover {
    background: #F6F9FE;
    color: #174ea6;
  }



`