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
  let lat
  let long
  navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude
    long = position.coords.longitude
  })
  const [weather, setWeather] = useState({})
  useEffect(() => {
    if (lat && long) {
      const fetchData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2b6e1fdfed69b04f6b7eb5d94563d0ca&units=imperial`)
        const data = await response.json()
        setWeather(data)
      }
      fetchData()
    }
  }, [lat, long])
  console.log(weather)
  const [pastweather, setPastWeather] = useState({})
  useEffect(() => {
    if (lat && long) {
      const fetchData1 = async () => {
        const response = await fetch(`http://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${long}&type=hour&start=0&cnt=1&appid=2b6e1fdfed69b04f6b7eb5d94563d0ca&units=imperial`)
        const data = await response.json()
        setPastWeather(data)
      }
      fetchData1()
    }
  }, [lat, long])
  console.log(pastweather)
  const direction = (TempDifference) => {
    if (TempDifference > 0) {
      return 'warmer'
    } return 'colder'
  }
  const message = (Difference) => {
    if (Difference > 5) {
      return 'In  other words, we are burning'
    } else if (Difference > 10) {
      return 'The world is literally ending'
    } else if (Difference < 5) {
      return 'It may not seem like much, but we will all burn sooner than we think'
    }
  }
  return (
    <CheckToken>
        <InfoBox>
          { Object.keys(weather).length && Object.keys(pastweather).length 
          ? (
            <Update onInterval={ () => setDate(Date().toLocaleString().split(' ')) } content=
                { `Get Ready to Procrastinate with Purpose!\n
                Today is ${ date[0] }, ${ date[1] } ${ date[2] }, ${ date[3] }.\n
                The local time is ${ convert(date[4]) }\n
                This ${ getSeason(new Date()) }, it is ${ parseFloat(weather.main.temp - pastweather.list[0].main.temp).toFixed(2) } \xB0F ${ direction(weather.main.temp - pastweather.list[0].main.temp) } than it was 40 years ago.\n
                ${ message(weather.main.temp - pastweather.list[0].main.temp) }.\n
                Put down your silly little TODO list and join our community of master procrastinators.`} />
            ) : <></>}
        </InfoBox>
    </CheckToken>
  )
}

export default Greeting
