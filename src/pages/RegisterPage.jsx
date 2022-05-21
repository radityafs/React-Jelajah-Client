import React from 'react';
import illustration from '../assets/illustration.svg';
import Logo from '../assets/logo.svg';
import '../css/RegisterPage.css';

export default function RegisterPage() {
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
              <h3>Register</h3>
            </div>

            <div className='form-body'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Full Name'
                  />
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
                  <button>Sign Up</button>

                  <div className='terms-condition'>
                    <input type='checkbox' className='checkbox' />
                    <span>Accept Terms & Condition </span>
                  </div>
                </div>
              </form>
            </div>

            <div className='line'>
              <hr />
            </div>

            <div className='form-footer'>
              <p>Already have an account?</p>
              <a href='/login'>
                <button>Sign In</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
