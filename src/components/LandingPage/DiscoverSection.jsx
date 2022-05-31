import React from 'react';
import Card from '../../atoms/Card';
import Bali from '../../assets/Bali.webp';
import Lombok from '../../assets/Lombok.webp';
import Sumba from '../../assets/SUMBA.webp';
import Jakarta from '../../assets/Jakarta.webp';
import Yogyakarta from '../../assets/Yogyakarta.webp';
import LabuanBajo from '../../assets/LabuanBajo.webp';

export default function DiscoverSection() {
  return (
    <section className='discover-section'>
      <div className='container-md'>
        <div className='text-section'>
          <h2>Discover Indonesia</h2>

          <div className='text-more'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisi vel consectetur interdum, nisl nisi consectetur
              nisi, eget consectetur nisi nisi vel nisi.
            </p>

            <div className='more'>
              <a href='/#'>View All</a>
            </div>
          </div>
        </div>

        <div className='card-list'>
          <Card picture={Bali} city={'Bali'} />
          <Card picture={Lombok} city={'Lombok'} />
          <Card picture={Sumba} city={'Sumba'} />
          <Card picture={Jakarta} city={'Jakarta'} />
          <Card picture={Yogyakarta} city={'Yogyakarta'} />
          <Card picture={LabuanBajo} city={'Labuan Bajo'} />
        </div>
      </div>
    </section>
  );
}
