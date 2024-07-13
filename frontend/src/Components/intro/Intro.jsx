import React from 'react'
import "./intro.css"
import Navbar from '../navbar/Navbar'

function Intro() {
  return (

    <div className='intro'>
        <div className="intro_tagline">
            <h1>Welcome to Parmatamam</h1>
            {/* <img src="../img/namaskar.png" alt=""  className='namaskarimg'/> */}
            <h3>Namo namah! Namaskarah!</h3>
            <div className="introductioncon">
            <p className='introduction'> Immerse yourself in the spiritual heart of India as we guide you through the holiest of places. From the vibrant ghats of Varanasi to the tranquil temples of Rishikesh, discover the essence of devotion, culture, and tradition. Let Parmathamam be your portal to the divine, where every click unveils a new chapter in India's spiritual tapestry</p>
            </div>
        </div>
    </div>

  )
}

export default Intro