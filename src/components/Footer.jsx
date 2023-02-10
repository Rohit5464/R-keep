
import React from 'react'
import '../App.css'

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className='footer'>
        <p>copyright© <span>{year}</span> </p>
        
    </div>
  )
}

export default Footer