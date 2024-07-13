import React from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import FestivalIcon from '@mui/icons-material/Festival';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="section1">
        <h1>Parmathamam</h1>
      </div>
      <div className="section2">
        
          <div className="home navcon">
          <Link to="/">
            <HomeIcon className='navlogo'/>
            {/* <p>Home</p> */}
            </Link>
            </div>
          <div className="places navcon">
          <Link to="/destinations">
          <FestivalIcon className='navlogo'/>
          {/* <p>Destinations</p> */}
          </Link>
          </div>
          <div className="contactus navcon">
          <Link to="/contactus">
          <CallIcon className='navlogo'/>
          {/* <p>Contact Us</p> */}
          </Link>
          </div>
          <div className="signinicon navcon">
          <Link to="/signin">
            <AccountCircleIcon className='navlogo'/>
            {/* <p>Account</p> */}
             </Link>
          </div>
          
        
      </div>
    </div>
  )
}

export default Navbar