import React from 'react'
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';

export default function Header() {
  return (
    <nav className='navbar navbar-expand-md nav-wrapper sticky-top'>
    <div className='container-md' style={{ width: '100vw' }}>
      <a className='navbar-brand' href='/#'>
        <img
          src={Logo}
          style={{ width: '50px', height: '34px' }}
          alt='logo'
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#collapsibleNavbar'
      >
        <span className='fa fa-navicon'></span>
      </button>
      <div
        className='collapse navbar-collapse justify-content-end'
        id='collapsibleNavbar'
      >
        <ul className='navbar-nav'>
          <li>
            <div className='search'>
              <img src={Search} alt='search' />
              <input type='text' placeholder='Where you want to go?' />
            </div>
          </li>
          <li>
            <a href='index.html'>Find Ticket</a>
          </li>
          <li>
            <a href='about.html'>My Bookings</a>
          </li>
          <li>
            <a className='btn-nav' href='/signup'>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
