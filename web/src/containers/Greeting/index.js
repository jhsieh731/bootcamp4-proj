import React, { useState } from 'react'
import CheckToken from "../CheckToken"
import { InfoBox, WelcomeText, CenteredText } from "./styles"
import { DateTime } from 'luxon'


const Greeting = () => {
  const user_id = localStorage.getItem('user_id')
  const [date, setDate] = useState(Date().toLocaleString().split(' '))
  const Update = (props) => {
      setInterval(props.onInterval, 1000)
      const text = props.content
      const formatText = text.split('\n').map(str => <p>{ str }</p>)
      return <CenteredText>{ formatText }</CenteredText>
  }
  const convert = (time) => {
      let toD;
      if (Number(time.split(':')[0]) > 11) {
          toD = 'PM'
      } else {
          toD = 'AM'
      }
      return ` ${DateTime.fromFormat(time, 'HH:mm:ss').toFormat('h:mm:ss')} ${ toD }.`
  }
  
  return (
    <CheckToken>
      <div>
        <InfoBox>
          <WelcomeText>Get Ready to Procrastinate with Purpose</WelcomeText>
          <Update onInterval={ () => setDate(Date().toLocaleString().split(' ')) } content=
                { `Today is ${ date[0] }, ${ date[1] } ${ date[2] }, ${ date[3] }.\n
                Local Time: ${ convert(date[4]) }\n` } />
        </InfoBox>
      </div>
    </CheckToken>
  )
}

export default Greeting
