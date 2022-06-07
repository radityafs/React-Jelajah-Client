import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { url = 'bali', picture, city, totalDestination = 0 } = props;
  return (
    <div className='card'>
      <Link to={`/explore/${url}`}>
        <img src={picture} alt='card' />

        <div className='card-act-total'>
          <div className='card-act'>
            <p>
              <b>{totalDestination}</b> Destination
            </p>
          </div>
        </div>
        <div className='card-text'>
          <h5></h5>
          <h5>{city}</h5>
          <FaRegArrowAltCircleRight className='arrow' />
        </div>
      </Link>
    </div>
  );
}
