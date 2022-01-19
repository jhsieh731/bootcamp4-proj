import styled from 'styled-components'
import theme from '../../theme'

export const InfoBox = styled.div`
    background-color: ${ () => theme.colors.box};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: auto;
    width: 100vw;
`

export const CenteredText = styled.p`
    text-align: center;
    font-family:${ () => theme.fonts.text.family};
    font-size: 20px;
    color: white;
`