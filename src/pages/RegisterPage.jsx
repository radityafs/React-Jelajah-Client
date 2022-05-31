import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import illustration from '../assets/illustration.svg';
import Logo from '../assets/logo.svg';
import '../css/RegisterPage.css';

import { register } from '../redux/actions/auth';
import Swal from 'sweetalert2';

export default function RegisterPage() {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Jelajah - Register';
  }, []);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    terms: false
  });

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, make sure you filled all the fields correctly',
        confirmButtonColor: '#3085d6'
      });
    }
  }, [isError]);

  const RegisterForm = async (e) => {
    e.preventDefault();
    if (form.terms === false) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must agree to the terms and conditions',
        confirmButtonColor: '#3085d6'
      });
    } else {
      if (form.full_name === '' || form.email === '' || form.password === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill all the fields',
          confirmButtonColor: '#3085d6'
        });
      } else {
        const sendForm = await register(form, setIsError);
        if (sendForm) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'You have successfully registered',
            timer: 2000
          });

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      }
    }
  };

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
              <form onSubmit={RegisterForm}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Full Name'
                    onChange={(e) => {
                      setForm({ ...form, full_name: e.target.value });
                    }}
                    value={form.full_name}
                  />
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                  />
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    value={form.password}
                  />
                  <button>Sign Up</button>

                  <div className='terms-condition'>
                    <input
                      type='checkbox'
                      onClick={(e) => {
                        setForm({ ...form, terms: e.target.checked });
                      }}
                      value={form.terms}
                      className='checkbox'
                    />
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
              <Link to='/login'>
                <button>Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
