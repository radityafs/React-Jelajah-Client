import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard() {
  return (
    <Link to={'/bookingPass'}>
      <div className='order-booking'>
        <div className='order-summary'>
          <p>Senin, 20 Mei 2022</p>
          <h2>Disneyland - Ancol</h2>
        </div>

        <hr />

        <div className='order-detail'>
          <div className='status-box'>
            <p>Status</p>

            <div className='status-order pending'>Waiting For Payment</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
