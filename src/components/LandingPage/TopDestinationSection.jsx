import React from 'react';
import leftButton from '../../assets/btn-left.svg';
import rightButton from '../../assets/btn-right.svg';
import CircleCard from '../../atoms/CircleCard';
export default function TopDestinationSection() {
  return (
    <section className='section-top'>
      <div className='container'>
        <div className='box-top-list'>
          <h3>TOP 10</h3>
          <h5>Top 10 destinations</h5>

          <div className='img-card-list'>
            <CircleCard />
            <CircleCard />
            <CircleCard />
            <CircleCard />
            <CircleCard />
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
