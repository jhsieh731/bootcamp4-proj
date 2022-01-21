import styled from 'styled-components'
import theme from '../../theme'
import img from './greeting_bg.gif';

export const BackgroundBox = styled.div`
  background-image: url(${img});
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 50vw;
`

export const InfoBox = styled.div`
  background-color: ${ () => theme.colors.box};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenteredText = styled.p`
  text-align: center;
  font-family:${ () => theme.fonts.text.family};
  font-size: 20px;
  color: white;
  
`

export const Attributes = styled.footer`
  font-family: ${ () => theme.fonts.text.family};
  color: black;
  display: flex;
  justify-content: center;
`

export const CenterElement = styled.div`
  margin: auto;
`