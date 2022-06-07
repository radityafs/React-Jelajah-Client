import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard(props) {
  const {
    status = 0,
    date = new Date().toUTCString(),
    name = 'Disneyland - Ancol',
    id = 1
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link to={`/bookingpass/${id}`}>
      <div className='order-booking'>
        <div className='order-summary'>
          <p>{date}</p>
          <h2>{name}</h2>
        </div>

        <hr />

        <div className='order-detail'>
          <div className='status-box'>
            <p>Status</p>

            <div
              className={`status-order ${status === 0 ? 'pending' : 'succeed'}`}
            >
              {status === 0 ? 'Waiting for payment' : 'Success'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
