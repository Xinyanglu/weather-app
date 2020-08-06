import React from 'react'
import './HourlyWeatherCard.css'

function HourlyWeatherCard(props){
    let icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
    return(
        <div className='hourly-weather'>
            <h3 className='hour'><img src={icon} alt="weather-icon"/> {(new Date(props.date*1000)).getHours()} {props.temperature} °C  {props.status}</h3>
        </div>
    )
}

export default HourlyWeatherCard