import styled from 'styled-components'
import theme from '../../theme'

export const CenterElement = styled.div`
    margin: auto;
    padding: 20vh;
    background-color: ${props => theme.colors.background};
`

export const LoginButton = styled.button`
    background-color: ${props => theme.colors.button};
    border: none;
    font-family: ${props => theme.fonts.text.family};
    font-size: 20px;
    color: black;
    width: auto;
    height: auto;
`

export const LoginField = styled.input`
    font-family: ${props => theme.fonts.text.family};
    font-size: 20px;
    background-color: ${props => theme.colors.input};
    border: none;
    color: black;
    height: auto;
`

export const ColBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: ${props => theme.fonts.text.family};
    columns: 100vw 1;
    padding: 15px;
`

export const Attributes = styled.footer`
    font-family: ${props => theme.fonts.text.family};
    color: black;
    display: flex;
    columns: 100vw 1;
    justify-content: center;
`
