import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/CheckoutPages.css';
import { FcHighPriority } from 'react-icons/fc';
import { FaCheckCircle } from 'react-icons/fa';

export default function CheckoutPages() {
  useEffect(async () => {
    document.title = 'Checkout';
  }, []);
  return (
    <>
      <Header />
      <section
        className='checkout-section'
        style={{
          paddingTop: '60px',
          height: '1500px',
          backgroundColor: '#F5F6FA'
        }}
      >
        <div
          className='top-bar'
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: '#2395FF',
            borderRadius: '0 0 25px 25px'
          }}
        >
          <div className='container-md' style={{ paddingTop: '50px' }}>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-md-12'>
                <p
                  style={{
                    fontSize: '24px',
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: '25px'
                  }}
                >
                  Contact Person Details
                </p>

                <div
                  className='box-form-contact'
                  style={{
                    widht: '100%',
                    backgroundColor: 'white',
                    height: '400px',
                    borderRadius: '15px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                  <div
                    className='box-danger'
                    style={{
                      widht: '100%',
                      backgroundColor: 'rgba(242, 69, 69, 0.1)',
                      height: '50px',
                      borderRadius: '10px',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px',
                      flexDirection: 'row'
                    }}
                  >
                    <FcHighPriority
                      style={{ fontSize: '25px', marginRight: '10px' }}
                    />

                    <p style={{ marginBottom: 0, color: '#595959' }}>
                      Make sure the customer data is correct.
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    marginTop: '50px',
                    marginBottom: '25px',
                    fontWeight: '600'
                  }}
                >
                  Passenger Details
                </p>

                <div
                  className='box-passenger'
                  style={{
                    height: '400px',
                    widht: '100%',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    className='box-passenger-item'
                    style={{
                      widht: '100%',
                      backgroundColor: 'rgb(35, 149, 255,0.1)',
                      height: '50px',
                      borderRadius: '10px',
                      borderRadius: '15px',
                      marginBottom: '20px',
                      paddingLeft: '25px',
                      paddingRight: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <p style={{ marginBottom: 0 }}>Passenger : 1 Adult</p>

                    <div
                      className='toggle-same'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '100%',
                        alignItems: 'center'
                      }}
                    >
                      <p style={{ marginBottom: 0, marginRight: '25px' }}>
                        Same as contact person
                      </p>
                      <label class='switch'>
                        <input type='checkbox' />
                        <span class='slider round' />
                      </label>
                    </div>
                  </div>
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    marginTop: '50px',
                    marginBottom: '25px',
                    fontWeight: '600'
                  }}
                >
                  Passenger Details
                </p>

                <div
                  className='box-passenger-detail'
                  style={{
                    widht: '100%',
                    height: '150px',
                    backgroundColor: '#FFF',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    className='insurance-top'
                    style={{
                      height: '50%',
                      borderBottom: '1px solid #E6E6E6',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      className='left-insurance-top'
                      style={{ display: 'flex', flexDirection: 'row' }}
                    >
                      <input
                        className='insurance-checkbox'
                        type='checkbox'
                        style={{
                          border: '1px solid #2395FF',
                          height: '20px',
                          widht: '20px',
                          marginRight: '10px'
                        }}
                      />

                      <h5 style={{ marginBottom: 0, fontSize: '18px' }}>
                        Travel Insurance
                      </h5>
                    </div>

                    <div className='right-insurance-top'>
                      <p
                        style={{
                          marginBottom: 0,
                          fontSize: '18px',
                          marginRight: '20px',
                          fontWeight: '600',
                          color: '#2395FF'
                        }}
                      >
                        Rp 10.000
                      </p>
                    </div>
                  </div>
                  <div
                    className='insurance-bottom'
                    style={{
                      height: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px'
                    }}
                  >
                    Get travel compensation up to Rp 10.000.000
                  </div>
                </div>

                <div
                  className='btn-submit'
                  style={{
                    marginTop: '40px',
                    widht: '100px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <button
                    style={{
                      height: '50px',
                      width: '300px',
                      border: 0,
                      backgroundColor: '#2395FF',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#FFF',
                      borderRadius: '10px'
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-0'>
                <div
                  className='title-detail'
                  style={{
                    display: 'flex',
                    flexDirections: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      fontSize: '24px',
                      color: 'white',
                      fontWeight: '600',
                      marginBottom: '25px'
                    }}
                  >
                    Itinerary Details
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'white',
                      marginBottom: '25px'
                    }}
                  >
                    View Details
                  </p>
                </div>

                <div
                  className='box-detail-order'
                  style={{
                    widht: '100%',
                    backgroundColor: '#FFF',
                    height: '375px',
                    borderRadius: '15px',
                    padding: '20px'
                  }}
                >
                  <h2
                    style={{
                      fontSize: '18px',
                      widht: '100%',
                      marginTop: '10px',
                      marginBottom: '20px'
                    }}
                  >
                    Sunrise Trekking di Gunung Batur
                  </h2>

                  <p style={{ marginBottom: '20px' }}>Denpasar, Bali</p>

                  <p style={{ marginBottom: '40px' }}>
                    Sunday, 15 August 2020. 12:33 - 15:21
                  </p>

                  <div className='include-list'>
                    <div
                      className='list-include'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '20px',
                        color: '#2395FF'
                      }}
                    >
                      <FaCheckCircle style={{ marginRight: '10px' }} />

                      <p style={{ marginBottom: 0, fontWeight: '500' }}>
                        Refundable
                      </p>
                    </div>
                    <div
                      className='list-include'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '25px',
                        color: '#2395FF'
                      }}
                    >
                      <FaCheckCircle style={{ marginRight: '10px' }} />

                      <p style={{ marginBottom: 0, fontWeight: '500' }}>
                        Can reschedule
                      </p>
                    </div>
                  </div>
                  <hr style={{ marginTop: '50px' }} />

                  <div
                    className='price-order'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '25px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <h5>Total Payment</h5>

                    <h5>Rp. 10.000.000</h5>
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
