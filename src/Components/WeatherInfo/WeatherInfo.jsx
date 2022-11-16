import React from 'react'
import './WeatherInfo.scss'
const WeatherInfo = ({text,img}) => {
  return (
    <div className='forecast'>
      <p>{text}</p>
      <img src={img} alt={text} /> 
    </div>
  )
}

export default WeatherInfo