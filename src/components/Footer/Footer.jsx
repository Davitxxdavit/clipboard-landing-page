import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import instagram from '../../assets/icon-instagram.svg';


const Footer = () => {
  return (
    <div className='footer'>
      <img className='logo-main' src={logo} />
      <div className='links'>
        <div className='links-item'>
             <p>FAQs</p>
             <p>Contact Us</p>
        </div>
        <div className='links-item'>
            <p>Privacy Policy</p>
            <p>Press Kit</p>
        </div>
        <p>Install Guide</p>    
      </div>
      <div className='logos1'>
        <img src={facebook} />
        <img src={twitter} />
        <img src={instagram} />
      </div>
    </div>
  )
}

export default Footer
