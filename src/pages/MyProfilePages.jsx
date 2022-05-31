import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function MyProfilePages() {
  return (
    <>
      <Header />

      <section className='mybooking-section'>
        <div className='container-md'>
          <div className='row'>
            <div className='col-sm-0 col-md-5 col-lg-3'>
              <Sidebar />
            </div>
            <div className='col-sm-12 col-md-7 col-lg-9'>
              <div className='box-profile'>
                <div className='row'>
                  <p
                    style={{
                      letterSpacing: '5px',
                      color: '#2395FF',
                      fontSize: '16px'
                    }}
                  >
                    PROFILE
                  </p>
                  <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>
                    Profile
                  </h2>

                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>
                      Contact
                    </p>

                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      placeholder='Email'
                      value='radityafiqa4@gmail.com'
                    />

                    <label htmlFor='phone'>Phone Number</label>
                    <input
                      type='text'
                      placeholder='Email'
                      value='+6281232254875'
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>
                      Biodata
                    </p>

                    <label htmlFor='email'>Full Name</label>
                    <input
                      type='text'
                      placeholder='Email'
                      value='Raditya Firman Syaputra'
                    />

                    <label htmlFor='email'>City</label>
                    <input type='text' placeholder='City' value='Jakarta' />

                    <label htmlFor='address'>Address</label>
                    <input
                      type='text'
                      placeholder='Email'
                      value='Medan , Indonesia'
                    />

                    <label htmlFor='postcode'>Post Code</label>
                    <input type='text' placeholder='Post Code' value='57281' />

                    <div className='space-end'>
                      <button>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
