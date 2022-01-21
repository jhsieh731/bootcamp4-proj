import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
`

export const YourselfBox = styled.div`
    padding: 20px;
    box-shadow: 0 8px 6px -6px black;
    
`

export const FriendsBox = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
`

export const ActualFriends = styled.div`
    background-color: white;
    flex-grow: 1;
    text-align: center;
    padding: 20px;
    width: 33%;
    border-top: 2px solid black;
    background-color: #c1c8e4;
    height: 70vh;
    border-right: 2px solid black;

`

export const PendingFriends = styled.div`
    text-align: center;
    background-color: white;
    flex-grow: 1;
    width: 33%;
    padding: 20px;
    border-top: 2px solid black;
    height: 100%;
    background-color: #c1c8e4;
    height: 70vh;
    border-right: 2px solid black;

`

export const RequestedFriends = styled.div`
    background-color: white;
    flex-grow: 1;
    text-align: center;
    width: 33%;
    padding:20px;
    border-top: 2px solid black;
    background-color: #c1c8e4;
    height: 70vh;

`

export const SelfInfoDiv = styled.div`
    text-align: center;

`



export const BestLi = styled.li `
    list-style-type: none;
    margin-top: 3px;
    background-color: yellow;
    display: flex;
    flex-direction: row;
    border-radius: 2px;
    border: 1px solid black;
    height: 50px;

`

export const BestP = styled.li`
    background-color: #fdd385;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid black;
    font-weight: bold;
    width: 190px;
`

export const BestTask = styled.div`
    background-color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
`

export const DelFriendBtn = styled.button`
    margin-left: 10px;
`

export const AccButton = styled.button`
    margin-right: 20px;
`   


export const RejButton = styled.button`
    margin-left: 20px;
`   