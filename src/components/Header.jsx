import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import Bali from '../assets/card1.png';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function Header() {
  const [isLogged, SetisLogged] = useState(false);
  const [userProfile, SetuserProfile] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      SetisLogged(true);

      try {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data?.photo != undefined) {
          axios
            .get(
              `${process.env.REACT_APP_BACKEND_API_URL}/public/${data?.photo}`
            )
            .then((res) => {
              SetuserProfile(res.data);
            });
        } else {
          SetuserProfile(Bali);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
          confirmButtonColor: '#3085d6',
          timer: 2000
        });
      }
    } else {
      SetisLogged(false);
    }
  }, []);

  return (
    <>
      <nav className='navbar nav-wrapper navbar-expand-lg navbar-light bg-light bg-white py-40'>
        <div className='container-md'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='dssds' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto text-lg gap-lg-0 gap-2'>
              <li className='nav-item my-auto'>
                <div className='search'>
                  <img src={Search} alt='search' />
                  <input type='text' placeholder='Where you want to go?' />
                </div>
              </li>

              <li className='nav-item my-auto me-lg-20'>
                <Link className='nav-link' to='/explore'>
                  Find Ticket
                </Link>
              </li>
              <li className='nav-item my-auto me-lg-20'>
                <Link className='nav-link' to='/mybooking'>
                  My Bookings
                </Link>
              </li>
              {!isLogged ? (
                <li>
                  <Link className='btn-nav' to='/signup'>
                    Sign Up
                  </Link>
                </li>
              ) : (
                <li className='nav-item my-auto dropdown d-flex'>
                  <div className='vertical-line d-lg-block d-none'></div>
                  <div>
                    <a
                      className='dropdown-toggle ms-lg-40'
                      href='#'
                      role='button'
                      id='dropdownMenuLink'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img
                        src={userProfile}
                        className='rounded-circle'
                        width='40'
                        height='40'
                        alt=''
                      />
                    </a>

                    <ul
                      className='dropdown-menu border-0'
                      aria-labelledby='dropdownMenuLink'
                    >
                      <li>
                        <a
                          className='dropdown-item text-lg color-palette-2'
                          href='#'
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item text-lg color-palette-2'
                          href='#'
                        >
                          Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item text-lg color-palette-2'
                          href='#'
                        >
                          Account Settings
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item text-lg color-palette-2'
                          href='#'
                          onClick={() => {
                            console.log('logout');
                            localStorage.removeItem('token');
                            localStorage.removeItem('data');
                            SetisLogged(false);
                          }}
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
