
import React from 'react'
import '../App.css'

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className='footer'>
        <p>copyrightÂ© <span>{year}</span> </p>
        
    </div>
  )
}

export default Footer