import styled from 'styled-components'
import theme from '../../theme'

export const Background = styled.div `
  height: 100vh;
  background-color: ${props => theme.colors.background};
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  overflow: hidden;
`

export const NiceRegisterBox = styled.div`
top: 10%;
  position: relative;
  margin: 5% auto;
  width: 600px;
  height: 400px;
  background: #e8f0fe;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`

export const NiceForm = styled.form`
  text-align: center;
  padding-top: 50px;
`

export const GoodBox = styled.div`

    text-align: center;
    margin: 0 auto;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 40px;
  
`

export const NiceInput = styled.input`
  display: block;
  margin:  auto;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #AAA;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  background-color: white;

  .textarea {
      border-color: white;
  }

  &:focus{
    border-bottom: 2px solid #16a085;
  color: #16a085;
  transition: 0.2s ease;
  outline-width: 0;
  }
`

export const RegisterButton = styled.button`
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

  &:hover {
    background: #F6F9FE;
    color: black;
    }
`