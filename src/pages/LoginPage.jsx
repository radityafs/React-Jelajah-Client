import React from 'react';
import illustration from '../assets/illustration.svg';
import Logo from '../assets/logo.svg';
import '../css/RegisterPage.css';

export default function LoginPage() {
  return (
    <div className='container-full row'>
      <div className='side-image col-lg-7 col-sm-0'>
        <img src={illustration} alt='logo' />
      </div>
      <div className='col-lg-5 col-sm-12'>
        <div className='container-md'>
          <div className='logo-header'>
            <img src={Logo} alt='' />
            <h2>Jelajah</h2>
          </div>

          <div className='form-container'>
            <div className='form-header'>
              <h3>Login</h3>
            </div>

            <div className='form-body'>
              <form>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                  />
                  <button>Sign In</button>
                </div>
              </form>
            </div>

            <div className='line'>
              <hr />
            </div>

            <div className='form-footer'>
              <p>Did you forgot password ?</p>
              <a href='/forgot'>
                <button>Reset Password</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
