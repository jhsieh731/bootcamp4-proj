import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
    background-color: #c1c8e4;
`

export const YourselfBox = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 0 8px 6px -6px white;
    border: 2px solid white;
    border-radius: 10px;
    background-color: #2E294E;
    color: white;
`

export const FriendsBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const ActualFriends = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 20px;
  width: 33%;
  border-radius: 10px;
  border: 2px solid white;
  background-color: #2E294E;
  height: 70vh;
  margin: 20px;
  color: white;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: small;

`

export const PendingFriends = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    flex-grow: 1;
    width: 33%;
    border: 2px solid white;
    border-radius: 10px;
    height: 100%;
    background-color: #2E294E;
    height: 70vh;
    margin: 20px 0px;
    padding: 20px;
    color: white;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
`

export const RequestedFriends = styled.div`
    flex-grow: 1;
    text-align: center;
    width: 33%;
    padding:20px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: #2E294E;
    height: 70vh;
    margin: 20px;
    color: white;
  font-family: "Google Sans",Roboto,Arial,sans-serif;

`

export const SelfInfoDiv = styled.div`
  text-align: center;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
`

export const BestLi = styled.li `
    flex-grow: 1;
    list-style-type: none;
    background-color: #c1c8e4;
    align-items: center;
    display: flex;
    flex-direction: row;
    border-radius: 6px;
    border: none;
    height: 50px;
    margin: 20px;
    color: black;
    padding: 10px;
`

export const BestP = styled.li`
    background-color: #c1c8e4;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid black;
    margin-right: 10px;
    font-weight: bold;
    width: 200px;
    margin-top: 0px;
    margin-bottom: 0px;
    overflow: hidden;
`

export const BestTask = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    flex-wrap: no-wrap;

    margin: 20px;
    background-color: white;
    text-align: center;
    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 70%;
    border-radius: 10px;
`

export const DelFriendBtn = styled.button`

    border-radius: 10px;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    padding: 5px;
    background-color: #c1c8e4;
    &:hover {
      background-color: #a7b3c7;
    }
`

export const AccButton = styled.button`
    border-radius: 10px;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    padding: 5px;
    background-color: #c1c8e4;
    &:hover {
      background-color: #a7b3c7;
    }
`   


export const RejButton = styled.button`
  border-radius: 10px;
  margin-left: 5px;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  padding: 5px;
  background-color: #c1c8e4;
  &:hover {
    background-color: #a7b3c7;
  }
`

export const AddFriendButton = styled.button`
  border-radius: 10px;
  margin-left: 5px;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  padding: 5px;
  background-color: #c1c8e4;
  &:hover {
    background-color: #a7b3c7;
  }
`