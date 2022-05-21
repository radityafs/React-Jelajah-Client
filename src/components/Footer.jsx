import React from 'react'
import Playstore from '../assets/playstore.svg';
import AppStore from '../assets/appstore.svg';
import Logo from '../assets/logo.svg';

import {
    FaNeuter,
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
  } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer>
    <div className='container-md'>
      <div className='footer-company'>
        <img src={Logo} alt='logo' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur interdum, nisl nisi consectetur
          nisi,
        </p>

        <div className='copyright'>
          <p>Copyright © 2022 PT. Jelajah Inti Juang</p>
        </div>
      </div>

      <div className='features'>
        <h2>Features</h2>
        <div className='features-item'>
          <a href='/#'>Find Ticket</a>
          <a href='/#'>My Bookings</a>
          <a href='/#'>Chat</a>
          <a href='/#'>Notification</a>
        </div>
      </div>

      <div className='download'>
        <h2>Download Jelajah App</h2>

        <div className='store'>
          <img src={Playstore} alt='playstore' />
          <img src={AppStore} alt='appstore' />
        </div>
      </div>

      <div className='social-media'>
        <h2>Follow Us</h2>

        <div className='media'>
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
          <FaYoutube />
        </div>

        <div className='location'>
          <FaNeuter width={10} height={5} />
          Jakarta, Indonesia
        </div>
      </div>
    </div>
  </footer>
  )
}
