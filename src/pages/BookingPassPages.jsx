import React from 'react';
import '../css/BookingPass.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QRCode from '../assets/QRCode.png';

export default function BookingPassPages() {
  return (
    <>
      <Header />
      <section className='section-bookingpass'>
        <div className='container-md'>
          <div className='box-booking-pass'>
            <h1 style={{ fontSize: '26px', fontWeight: '600' }}>E-Ticket</h1>

            <div className='e-ticket'>
              <div className='row ticket-detail' style={{ height: '100%' }}>
                <div className='col-lg-8 col-md-6 col-sm-12'>
                  <div className='title-ticket'>
                    <h2
                      style={{
                        fontSize: '24px',
                        textAlign: 'center',
                        marginTop: '30px'
                      }}
                    >
                      Jelajah Dufan 2 Hari 3 Malam
                    </h2>
                  </div>

                  <div
                    className='row'
                    style={{
                      display: 'flex',
                      height: '80%',
                      alignItems: 'center'
                    }}
                  >
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <p
                        style={{
                          fontSize: '16px',
                          marginTop: '20px',
                          fontWeight: '400'
                        }}
                      >
                        Name
                      </p>
                      <h5
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          height: '50px'
                        }}
                      >
                        Raditya Firman Syaputra
                      </h5>
                      <p
                        style={{
                          fontSize: '16px',
                          marginTop: '20px',
                          fontWeight: '400'
                        }}
                      >
                        Date
                      </p>
                      <h5
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          height: '50px'
                        }}
                      >
                        27 April 2020
                      </h5>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '10%' }}>
                      <p
                        style={{
                          fontSize: '16px',
                          marginTop: '20px',
                          fontWeight: '400'
                        }}
                      >
                        Quantity
                      </p>
                      <h5
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          height: '50px'
                        }}
                      >
                        1 Qty
                      </h5>
                      <p
                        style={{
                          fontSize: '16px',
                          marginTop: '20px',
                          fontWeight: '400'
                        }}
                      >
                        Booking Id
                      </p>
                      <h5
                        style={{
                          fontWeight: '600',
                          fontSize: '16px',
                          height: '50px'
                        }}
                      >
                        BK-20200429-1
                      </h5>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div
                    className='qr-code'
                    style={{
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img src={QRCode} alt='QRCode' />
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
