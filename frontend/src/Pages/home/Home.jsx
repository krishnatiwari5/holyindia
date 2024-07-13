import React from 'react'
import Intro from '../../Components/intro/Intro'
import Popular from '../../Components/popular/Popular'
import Footer from '../../Components/footer/Footer'

function Home() {
  return (
    <div className='home'>
       
        <Intro/>
        <Popular/>
        <Footer/>
    </div>
  )
}

export default Home