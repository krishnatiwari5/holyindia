import React from 'react'
import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
        <div className="footercon">
            <div className="ourd">
                <h1 className='ftitle'>Parmathamam</h1>
                <p className='coverview'>Parmathmam is initiative to provide seemless experience to Indian Pilgrimage places. We offered best detail and deals to your destination, with more than 5000 trusted customer, we are one of the best service provider in this space.</p>
            </div>
            <div className="clinks">
                <h2>Get in touch</h2>
                <div className="linklogo">
                    <WhatsAppIcon className='llogo'/>
                    <InstagramIcon className='llogo'/>
                    <FacebookIcon className='llogo'/>
                    <LinkedInIcon className='llogo'/>
                </div>
            </div>
            <div className="fcontactinfo">
                <h2>Contact us</h2>
            <div className="fteld fcomcon">
            <CallIcon className='fclogo flogo'/>
        <p>+91 0261254524</p>
       </div>
        <div className="femaild fcomcon">
    <EmailIcon className='felogo flogo'/>
    <p>paramathamam511@paramathamam.org</p>
        </div>
        <div className="fwebsited fcomcon">
    <LanguageIcon className='flogo flogo'/>
    <p>www.parmathamam.com</p>
        </div>
        <div className="faddressd fcomcon">
          <LocationOnIcon className='falogo flogo' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, veniam!
          </p>
            </div>
            </div>
            <div className="newsletter">
                <h2 >Newsletter</h2>
                <input type="text" placeholder='Your email id here' required/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="copyright">

       <h3 >Copyright © {new Date().getFullYear()}  Parmathamam. All Rights Reserved</h3> 
        </div>
      
    </div>
  )
}

export default Footer