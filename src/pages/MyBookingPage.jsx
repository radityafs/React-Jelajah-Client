import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/MyBooking.css';

import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import OrderCard from '../components/MyBookingPage/OrderCard';

export default function MyBookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
                  <OrderCard />

                  <OrderCard />

                  <OrderCard />
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
