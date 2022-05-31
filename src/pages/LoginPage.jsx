import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import illustration from '../assets/illustration.svg';
import Logo from '../assets/logo.svg';
import { login } from '../redux/actions/auth';

export default function LoginPage() {
  useEffect(() => {
    document.title = 'Jelajah - Login';
  }, []);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isError?.status) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: isError.message,
        confirmButtonColor: '#3085d6'
      });
    }
  }, [isError]);

  const sendForm = async (e) => {
    e.preventDefault();

    if (form.email === '' || form.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
        confirmButtonColor: '#3085d6'
      });
    } else {
      const sendForm = await login(form, setIsError);
      if (sendForm) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully Logged in',
          confirmButtonColor: '#3085d6',
          timer: 2000
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
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
              <h3>Login</h3>
            </div>

            <div className='form-body'>
              <form onSubmit={sendForm}>
                <div className='form-group'>
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
