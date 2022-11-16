import React from 'react'
import './Nav.scss'
const Nav = ({greeting}) => {
  return (
    <div className='greeting'><p className='greeting__scroll'>Good {greeting}</p></div>
  )
}

export default Nav