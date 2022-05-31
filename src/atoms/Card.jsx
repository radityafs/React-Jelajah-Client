import React from 'react';
import Bali from '../assets/card1.png';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Card(props) {
  const { url = '/explore/bali', picture, city } = props;
  return (
    <div className='card'>
      <Link to={url}>
        <img src={picture} alt='card' />

        <div className='card-act-total'>
          <div className='card-act'>
            <p>
              <b>{Math.round(Math.random() * 100, 2)}</b> Destination
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
