import React, { useState, useEffect } from 'react'
import CheckToken from "../CheckToken"
import { InfoBox, CenteredText, BackgroundBox } from "./styles"
import { DateTime } from 'luxon'
import { SpinnerCircular } from 'spinners-react'

const UNKNOWN = "--"

const Greeting = () => {
  const [date, setDate] = useState(Date().toLocaleString().split(' '))

  const Update = (props) => {
    const onInterval = () => setDate(Date().toLocaleString().split(' '))
    setInterval(onInterval, 1000)
    return props.children
  }

  const convertTime = () => {
    if (date) {
      const time = date[4]
      const toD = (time.split(':')[0] > 11) ? 'PM': 'AM'
      return `${DateTime.fromFormat(time, 'HH:mm:ss').toFormat('h:mm:ss')} ${toD}.`
    }
    return UNKNOWN
  }

  const convertDate = () => {
    if (date) {
      return `${date[0]}, ${date[1]} ${date[2]}, ${date[3]}`
    }
    return UNKNOWN
  }

  const getSeason = () => {
    const dateObject = new Date()
    const month = dateObject.getMonth()
    switch (month) {
      case 2:
      case 3:
      case 4:
        return 'spring'
      case 5:
      case 6:
      case 7:
        return 'summer'
      case 8:
      case 9:
      case 10:
        return 'fall'
      default: 
        return 'winter'
    }
  }

  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const success = (pos) => {
    const crd = pos.coords;
    setLat(crd.latitude)
    setLong(crd.longitude)
    console.log({ lat });
  }
  const error = () => {}
  navigator.geolocation.getCurrentPosition(success, error)

  const [weather, setWeather] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2b6e1fdfed69b04f6b7eb5d94563d0ca&units=imperial`)
      const data = await response.json()
      setWeather(data)
    }
    if (lat && long) {
      fetchData()
    }
    else {
      console.log("MISSING LAT & LONG");
    }
  }, [lat, long])

  const [pastweather, setPastWeather] = useState()
  useEffect(() => {
    const fetchData1 = async () => {
      const response = await fetch(`http://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${long}&type=hour&start=0&cnt=1&appid=2b6e1fdfed69b04f6b7eb5d94563d0ca&units=imperial`)
      const data = await response.json()
      setPastWeather(data)
    }
    if (lat && long) {
      fetchData1()
    }
  }, [lat, long])
  const direction = (TempDifference) => {
    return TempDifference > 0 
      ? 'warmer'
      : 'colder'
  }

  const weatherMessage = (difference) => {
    if (difference > 5) {
      return 'In  other words, we are burning'
    } else if (difference > 10) {
      return 'The world is literally ending'
    } else if (difference < 5) {
      return 'It may not seem like much, but we will all burn sooner than we think'
    }
  }

  const isWeatherExist = weather && pastweather
  const degreeDiff = isWeatherExist
    ? `${parseFloat(weather.main.temp - pastweather.list[0].main.temp).toFixed(2)} \xB0F ${direction(weather.main.temp - pastweather.list[0].main.temp)}`
    : UNKNOWN
  const showWeatherMessage = isWeatherExist
    ? weatherMessage(weather.main.temp - pastweather.list[0].main.temp)
    : UNKNOWN

  return (
    <CheckToken>
      <BackgroundBox>
        <InfoBox>
          <Update>
            <CenteredText>
              <p>Get ready to Procrastinate with Purpose!</p>
              <p>Today is {convertDate()}, </p>
              <p>This {getSeason()}, it is {degreeDiff} than it was 40 years ago.</p>
              <p>The local time is {convertTime()}</p>
              <p>{showWeatherMessage}</p>
              <p>Put down your silly little TODO list and join our community of master procrastinators.</p>
              {!isWeatherExist && <SpinnerCircular />}
            </CenteredText>
          </Update>
        </InfoBox>
      </BackgroundBox>
    </CheckToken>
  )
}

export default Greeting




