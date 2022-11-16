import React from 'react'
import './WeatherInfo.scss'
const WeatherInfo = ({text,img,temp}) => {
  return (
    <div className='forecast'>
      <h2 className='forecast__temp'>{temp + "\u00B0" + "C"}</h2>
      <div className='forecast__break'></div>
      <div className='forecast__weather'>
        <img  className='forecast__weather' src={img} alt={text} /> 
        <p  className='forecast__weather'>{text}</p>
      </div>
      
    </div>
  )
}

export default WeatherInfo