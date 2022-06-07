import React from 'react';
import BaliImage from '../assets/card1.png';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CardDestination(props) {
  const {
    activity_id = 1,
    price = 10000,
    name = 'Nusa Penida Day Tour from Bali',
    photo = BaliImage
  } = props;

  return (
    <Link to={`/activity/${activity_id}`}>
      <div className='card-popular'>
        <img src={photo} alt='Bali' />
        <div className='card-body'>
          <h5 className='card-title'>{name} </h5>
          <p className='card-info'>
            <div className='star'>
              <FaStar style={{ color: 'orange' }} />{' '}
              <span>
                4.8(3,568) • {Math.round(Math.random() * 100)}K+ booked
              </span>
            </div>
            <div className='feature-list'>
              <div className='box-feature'>Best Seller</div>
              <div className='box-feature'>Instant Confirmation</div>
            </div>
            <hr />
            <div className='price'>
              <span>From </span>

              <p>IDR </p>
              <p>{price.toLocaleString()}</p>
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
}
