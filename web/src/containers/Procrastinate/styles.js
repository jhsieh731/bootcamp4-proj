import styled from 'styled-components'
import theme from '../../theme'
import img from './studypng.jpeg';


export const BestLi = styled.li `
    list-style-type: none;
    width: 60%;

    float: left;
    padding-left: 10px;
    margin-top: 3px;
    height: 100%;
    overflow:auto;
`

export const BackgroundBox = styled.div`
    background-image: url(${img});
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding-bottom: 35px;
    padding-top: 10px;
    width: 100vw;
`



export const TaskButton = styled.button`
align-items: center;
appearance: none;
background-color: #fff;
border-radius: 5px;
border-style: none;
margin-right: 5px;
margin-left: 5px;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
box-sizing: border-box;
color: black;
border: 2px solid black;
cursor: pointer;
display: inline-flex;
fill: currentcolor;
font-family: "Google Sans",Roboto,Arial,sans-serif;
font-size: 14px;
font-weight: 500;
height: 20px;
justify-content: center;
letter-spacing: .25px;
line-height: normal;
max-width: 100%;
overflow: visible;
padding: 10px 5px;
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
  color: #174ea6;
  }
`

export const GoodSelect = styled.select`
    margin: 0 auto;
display: block;
margin-bottom: 10px;
`

export const AddButton = styled.button`
appearance: none;
background-color: #fff;
border-radius: 5px;
border-style: none;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
box-sizing: border-box;
color: black;
cursor: pointer;
display: inline-flex;
fill: currentcolor;
font-family: "Google Sans",Roboto,Arial,sans-serif;
font-size: 14px;
font-weight: 500;
height: 30px;
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
width: 60px;
will-change: transform,opacity;
z-index: 0;
margin-left: 50px;

&:hover {
  background: #F6F9FE;
  color: #174ea6;
  }

`

export const ActivityDiv = styled.button`
    background-color: white;
    height: 50px;
    margin: 0 auto;
    display: block;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;

`

export const FindButton = styled.button`
margin-left: 10px; 
border: 1px solid black;
position: absolute;
margin-right: 0;
align-items: center;
appearance: none;
background-color: #fff;
border-radius: 5px;
border-style: none;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
box-sizing: border-box;
color: black;
cursor: pointer;
display: inline-flex;
fill: currentcolor;
font-family: "Google Sans",Roboto,Arial,sans-serif;
font-size: 14px;
font-weight: 500;
height: 30px;
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
width: 300px;
will-change: transform,opacity;
z-index: 0;
margin-top: 18px;
margin: 0 auto;
display: block;

&:hover {
  background: #F6F9FE;
  color: #174ea6;
  }

`

export const AddActButton = styled.button`
align-items: center;
appearance: none;
background-color: #fff;
border-radius: 5px;
border-style: none;
box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
box-sizing: border-box;
color: black;
cursor: pointer;
display: inline-flex;
fill: currentcolor;
font-family: "Google Sans",Roboto,Arial,sans-serif;
font-size: 14px;
font-weight: 500;
height: 30px;
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
width: 300px;
will-change: transform,opacity;
z-index: 0;
margin: 0 auto;
display: block;
margin-top: 10px;
margin-bottom: 10px;

&:hover {
  background: #F6F9FE;
  color: #174ea6;
  }

`

export const LeftContainer = styled.div`
    flex: .6;
    align-items: center;
    margin-left: 100px;

`

export const NiceDiv = styled.div`
    background: #fed8b1; 
    border-radius: 4px;
    overflow: auto;
    padding: 10px;
    margin-top:10px;
    margin-bottom:10px;
    align: row;
    margin-left: -40px;

`
export const FormContainer = styled.div`
    background: #fed8b1; 
  float: bottom;
  border-radius: 10px;
  border: 1px solid black;
`
export const BestInput = styled.input`
    border: 0; 
    margin-top: 10px;
    padding: 7px 0; 
    border-bottom: 1px solid white;
    background-color: ${ () => theme.colors.box};
    color: white;
    margin-bottom: 10px;
    font-size: 15px;
    width: 80%;
    margin-left: 10px;
    &:focus{
        outline: none;
    }

`

export const BestInputForm = styled.input`
    border: 0; 
    padding: 7px ; 
    border-bottom: 1px solid white;
    background-color: #3f76bf;
    color: white;
    float: right;
    font-size: 15px;
    position: relative;
    left: -20px;
    top: 10px;
    width: 80%;
    &:focus{
        outline: none;
    }


`

export const Ftext = styled.h3`
    margin-left: 20px;
    float: left;
    color: white;
    font-family: "Google Sans",Roboto,Arial,sans-serif;

`

export const DecentDiv = styled.div`
    border-radius: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    overflow: auto;
`

export const BestCoSpan = styled.span`
    float: right;
    margin-left: 5px;
`
export const BestBarDiv = styled.div`
    background-color: #2E294E;
    border-radius: 3px;
    padding: 5px;
    overflow: auto;

`    

export const MiddleContainer = styled.div`
  width: 600px;
  margin: 50px auto;
  background: white;
  align: center;
  border: 1px solid gray;
  height: 80%;
  padding: 10px;
  border-radius: 5px;
  align: bottom;
`

export const TopContainer = styled.div`
align: top;
padding: 10px;
border-radius: 10px;
`

export const GoodLabel = styled.h4`
    color: white;
    float: left;
    padding: 5px;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: auto;
`

export const NoiceForm = styled.form`
padding: 5px;
`

export const BigDiv = styled.div`
background: white;
margin-left: 30px;
margin-right: 30px;
margin-top: 0px;
margin-bottom: 0px;
height: 50vh;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
overflow: scroll;
&::-webkit-scrollbar-track 
    {
        display:none;
    }
&::-webkit-scrollbar {
  display:none;
}
`