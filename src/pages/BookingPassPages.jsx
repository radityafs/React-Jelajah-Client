import React, { useEffect, useState } from 'react';
import '../css/BookingPass.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QRCode from '../assets/QRCode.png';
import { useParams, useNavigate } from 'react-router-dom';

export default function BookingPassPages() {
  const [orderDetail, setOrderDetail] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getOrderById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BACKEND_URL}/mybooking/${id}`,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      );

      setOrderDetail(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You are not logged in!'
        });

        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getOrderById(id);
  }, []);
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
                      {orderDetail?.data?.data?.activity?.name}
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
                        {orderDetail?.data?.data?.full_name}
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
                        {new Date(orderDetail?.data?.data?.date).toLocaleString(
                          'en-US',
                          {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          }
                        )}
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
                        {orderDetail?.data?.data?.transaction_id}
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
