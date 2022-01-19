import React, { useState, useEffect } from 'react'
import CheckToken from "../CheckToken"
import { InfoBox, CenteredText } from "./styles"
import { DateTime } from 'luxon'


const Greeting = () => {
  const [date, setDate] = useState(Date().toLocaleString().split(' '))
  const Update = (props) => {
      setInterval(props.onInterval, 1000)
      const text = props.content
      const formatText = text.split('\n').map(str => <p>{ str }</p>)
      return <CenteredText>{ formatText }</CenteredText>
  }
  const convert = (time) => {
      let toD;
      if (time.split(':')[0] > 11) {
          toD = 'PM'
      } else {
          toD = 'AM'
      }
      return `${DateTime.fromFormat(time, 'HH:mm:ss').toFormat('h:mm:ss')} ${ toD }.`
  }
  const getSeason = (dateobj) => {
    let season;
    if (dateobj.getMonth() <= 4 && dateobj.getMonth() >= 2) {
      season = 'spring'
    } else if (dateobj.getMonth() <= 7 && dateobj.getMonth() >= 5) {
      season = 'summer'
    } else if (dateobj.getMonth() <= 10 && dateobj.getMonth() >= 8) {
      season = 'fall'
    } else {
      season = 'winter'
    }
    return season;
  }
  // const [temp1, setTemp1] = useState({})
  // const [temp2, setTemp2] = useState({})
  // const getTempDifference = async () => {
  //     const currentUnix = Date.now()
  //     const oldUnix = currentUnix - 1262278080000
  //     const response1 = await fetch(`http://history.openweathermap.org/data/2.5/history/city?q=Boston,US&type=hour&start=${oldUnix}&appid=f5e62373a9abf0649138b6a25007c89e`)
  //     const response2 = await fetch(`http://history.openweathermap.org/data/2.5/history/city?q=Boston,US&type=hour&start=${currentUnix}&appid=f5e62373a9abf0649138b6a25007c89e`)
  //     const datum1 = await response1.json()
  //     const datum2 = await response2.json()
  //     console.log(datum1)
  //     console.log(datum2)
  //     setTemp1(datum1)
  //     setTemp2(datum2)
  //     return temp1.list[0].main.temp - temp2.list[0].main.temp
  // }
  // const direction = (getTempDifference) => {
  //   if (getTempDifference > 0) {
  //     return 'warmer'
  //   } return 'colder'
  // }
  return (
    <CheckToken>
        <InfoBox>
            <Update onInterval={ () => setDate(Date().toLocaleString().split(' ')) } content=
                { `Get Ready to Procrastinate with Purpose!\n
                Today is ${ date[0] }, ${ date[1] } ${ date[2] }, ${ date[3] }.\n
                The local time is ${ convert(date[4]) }\n
                This ${ getSeason(new Date()) }, it is ${ /* useEffect(() => getTempDifference(), []) } \xB0F ${ direction }*/ '<waiting>' } than it was 40 years ago.\n
                In other words, the world is ending.\n
                Put down your silly little TODO list and join our community of master procrastinators.` } />
        </InfoBox>
    </CheckToken>
  )
}

export default Greeting
