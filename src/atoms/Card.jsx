import React from 'react';
import Bali from '../assets/card1.png';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';
export default function Card() {
  return (
    <div className='card'>
      <img src={Bali} alt='card' />

      <div className='card-act-total'>
        <div className='card-act'>
          <p>
            <b>15</b> Destination
          </p>
        </div>
      </div>
      <div className='card-text'>
        <h5>Ubud,</h5>
        <h2>Bali</h2>
        <FaRegArrowAltCircleRight className='arrow' />
      </div>
    </div>
  );
}
