import React from 'react';
import Bali from '../assets/card1.png';
import UserIcon from '../assets/user.svg';
import SettingIcon from '../assets/settings.svg';
import ExitIcon from '../assets/exit.svg';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='user-photo'>
        <img className='photo' src={Bali} alt='user-photo' />

        <div className='upload-file'>
          <input type='file' id='file' />
          <label htmlFor='file'>Select Photo</label>
        </div>
      </div>
      <div className='user-name'>
        <h4>Raditya Firman Syaputra</h4>
        <p>Sragen - Indonesia</p>
      </div>
      <div>
        <div className='navigation-sidebar'>
          <ul>
            <Link className='list' to='/profile'>
              <img src={UserIcon} />
              Profile
            </Link>
            <Link className='list' to='/profile'>
              <img src={SettingIcon} />
              Settings
            </Link>
            <Link className='list' to='/mybooking'>
              <img src={ExitIcon} />
              Logout
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
