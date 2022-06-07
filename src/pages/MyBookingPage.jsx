import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/MyBooking.css';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import OrderCard from '../components/MyBookingPage/OrderCard';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function MyBookingPage() {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  const getOrder = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BACKEND_URL}/mybooking`,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      );

      setOrder(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You are not logged in!'
        });

        localStorage.removeItem('token');
        localStorage.removeItem('user');

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

    getOrder();
  }, []);

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
              <div style={{ height: '800px' }}>
                <div className='top-banner'>
                  <div className='title-booking'>
                    <p>MY BOOKING</p>
                    <h3>My Booking</h3>
                  </div>

                  <div className='subtitle-booking'>
                    <p>Order History</p>
                  </div>
                </div>

                <div className='order-booking-list'>
                  {order?.data?.data?.map((item, index) => {
                    return (
                      <OrderCard
                        key={index}
                        id={item?.transaction_id}
                        name={item?.activity?.name}
                        date={new Date(item?.date).toLocaleDateString()}
                      />
                    );
                  })}
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
