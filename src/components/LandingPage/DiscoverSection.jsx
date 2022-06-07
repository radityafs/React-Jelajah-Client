import React from 'react';
import Card from '../../atoms/Card';
import Bali from '../../assets/Bali.webp';

import { useEffect } from 'react';
import { getDestination } from '../../redux/actions/destination';
import { useDispatch, useSelector } from 'react-redux';

export default function DiscoverSection() {
  const dispatch = useDispatch();

  const destination = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(getDestination());
  }, []);

  return (
    <section className='discover-section'>
      <div className='container-md'>
        <div className='text-section'>
          <h2>Discover Indonesia</h2>

          <div className='text-more'>
            <p>
              With over 17,000 islands spreading into three time zones,
              Indonesia is the largest archipelago country in the world. Master
              and explore the key regions in Indonesia.
            </p>

            <div className='more'>
              <a href='/#'>View All</a>
            </div>
          </div>
        </div>

        <div className='card-list'>
          {destination.isError ? (
            <div>{destination.error}</div>
          ) : destination.isLoading ? (
            <div>Loading...</div>
          ) : (
            destination.data.map((item) => (
              <Card
                key={item.destination_id}
                url={item.destination_id}
                picture={item.photo}
                city={item.name}
                totalDestination={item.totalActivity}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
