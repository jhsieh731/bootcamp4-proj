import styled from 'styled-components'

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
    background: #fed8b1; 
    border-radius: 4px;
    overflow: auto;
    padding: 10px;
    margin-top:10px;
    margin-bottom:10px;
    align: row;
    margin-left: -40px;

`



export const CompleteButton = styled.button`
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


`