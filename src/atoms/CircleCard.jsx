import React from 'react';
import Bali from '../assets/card1.png';

export default function CircleCard(props) {
  const { picture, city } = props;
  return (
    <div className='card-img'>
      <img src={picture} alt='card' />
      <p>{city}</p>
    </div>
  );
}
