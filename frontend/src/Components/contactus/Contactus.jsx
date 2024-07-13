import React from 'react'
import "./contactus.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

function Contactus() {
  return (
    <div className="contactuscon">
    <div className='contactus'>
        <h1 className="mtitle contitle">Contact Us</h1>
      <div className="contactinfo">
      <div className="condet">
        <div className="emaild">
    <EmailIcon className='logo'/>
    <p>paramathamam511@paramathamam.org</p>
        </div>
        <div className="teld">
        <CallIcon className='logo'/>
        <p>+91 0261254524</p>
        </div>
        <div className="websited">
    <LanguageIcon className='logo'/>
    <p>www.parmathamam.com</p>
        </div>
        <div className="addressd">
          <LocationOnIcon className='logo' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, veniam!
          </p>
        </div>
      </div>
        <form action="" className="contactform">
        <input type="text" required placeholder='Your Name' name='userName'/>
    <input type="email" required placeholder='Your Email' name='userEmail' />
    <input type="tel" required placeholder='Your Contact number' pattern="[0-9]{10}" maxLength={12} name='userContact' />
    <textarea name="userMessage" id="" cols="20" rows="5" required placeholder='Your Message' ></textarea>
    <button>Send Message</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Contactus