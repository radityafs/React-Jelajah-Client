import React from 'react';
import leftButton from '../../assets/btn-left.svg';
import rightButton from '../../assets/btn-right.svg';
import CircleCard from '../../atoms/CircleCard';

import Bali from '../../assets/Bali.webp';
import Lombok from '../../assets/Lombok.webp';
import Sumba from '../../assets/SUMBA.webp';
import Jakarta from '../../assets/Jakarta.webp';
import Yogyakarta from '../../assets/Yogyakarta.webp';
import LabuanBajo from '../../assets/LabuanBajo.webp';

export default function TopDestinationSection() {
  return (
    <section className='section-top'>
      <div className='container'>
        <div className='box-top-list'>
          <h3>TOP 10</h3>
          <h5>Top 10 destinations</h5>

          <div className='img-card-list'>
            <CircleCard picture={Bali} city={'Bali'} />
            <CircleCard picture={Lombok} city={'Lombok'} />
            <CircleCard picture={Sumba} city={'Sumba'} />
            <CircleCard picture={Jakarta} city={'Jakarta'} />
            <CircleCard picture={Yogyakarta} city={'Yogyakarta'} />
          </div>

          <div className='button-action'>
            <div className='left-button'>
              <img src={leftButton} alt='' />
            </div>
            <div className='right-button'>
              <img src={rightButton} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
