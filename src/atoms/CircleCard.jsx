import React from 'react';
import Bali from '../assets/card1.png';

export default function CircleCard() {
  return (
    <div className='card-img'>
      <img src={Bali} alt='card' />
      <p>Bali</p>
    </div>
  );
}
