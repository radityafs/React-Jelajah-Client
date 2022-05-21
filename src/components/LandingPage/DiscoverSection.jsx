import React from 'react';
import Card from '../../atoms/Card';

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
