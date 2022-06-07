import React, { useEffect, useState } from 'react';
import '../css/ExplorePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardDestination from '../atoms/CardDestination';
import {
  getActivityOfDestination,
  getDetailDestination
} from '../redux/actions/activity';
import { useParams, useNavigate } from 'react-router-dom';

export default function ExploreCityPages() {
  const [detailDestination, setDetailDestination] = useState({
    isLoading: true,
    isError: false,
    data: []
  });

  const [activity, setActivity] = useState({
    isLoading: false,
    isError: false,
    data: []
  });

  const { destination_id } = useParams();

  const getActivity = async () => {
    await getActivityOfDestination(destination_id, setActivity);
    await getDetailDestination(destination_id, setDetailDestination);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getActivity();
  }, []);

  return (
    <>
      <Header />
      <section className='container-md bannerTop'>
        <div className='topBanner'>
          <img
            src={
              detailDestination.data?.data?.data?.destination?.PhotoBackground
            }
            alt='Bali'
          />
        </div>
      </section>

      <section className='container-md experiences'>
        <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
          Popular activities in{' '}
          {detailDestination.data?.data?.data?.destination?.name}
        </h1>

        <div className='popular-list'>
          {detailDestination.isError ? (
            <div className='error'>{detailDestination.error}</div>
          ) : detailDestination.isLoading ? (
            <div className='loading'>Loading...</div>
          ) : (
            detailDestination?.data?.data?.data?.activityPopular?.map(
              (item, index) => (
                <CardDestination
                  key={index}
                  name={item.name}
                  activity_id={item.activity_id}
                  photo={item.Image}
                  price={item.price}
                />
              )
            )
          )}
        </div>
      </section>

      <section className='container-md experiences-list'>
        <div className='top-container-experience'>
          <div className='info-experience-list'>
            <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
              Explore more activities in{' '}
              {detailDestination.data?.data?.data?.destination?.name}
            </h1>
            <p>{activity?.data?.data?.data?.length} activities found</p>
          </div>
          <div className='search-experience'>
            <input type='text' placeholder='Search Activity or Destination' />

            <select>
              <option value='0'>Recommend</option>

              <option value='1'>Popular</option>
              <option value='2'>Price</option>
              <option value='3'>Rating</option>
            </select>
          </div>
        </div>

        <div className='experiences-list-container'>
          <div className='row'>
            {activity.isError ? (
              <div className='error'>{activity.error}</div>
            ) : activity.isLoading ? (
              <div className='loading'>Loading...</div>
            ) : (
              activity?.data?.data?.data?.map((item, index) => (
                <div className='col-md-6 col-lg-3 col-sm-6' key={item.id}>
                  <CardDestination
                    photo={item.image}
                    price={item.price}
                    key={index}
                    name={item.name}
                    activity_id={item.activity_id}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section
        className='info-destination'
        style={{ fontSize: '14px !important' }}
      >
        <div className='container-md'>
          <div className='box-info-destination'>
            <div className='about-destination'>
              <h4>
                Tentang {detailDestination.data?.data?.data?.destination?.name}
              </h4>
              <p>
                {detailDestination.data?.data?.data?.destination?.description}
              </p>
            </div>

            <div className='weather-destination'>
              <h4>Cuaca Setempat</h4>

              <p>JAN - DEC</p>
              <h5 style={{ marginBottom: '15px', marginTop: 0 }}>
                {detailDestination.data?.data?.data?.destination?.temperature}
              </h5>
            </div>

            <div className='public-information'>
              <h4>Informasi Umum</h4>

              <div className='info'>
                <div className='info-box zona-waktu'>
                  <p style={{ fontWeight: 600 }}>Zona Waktu</p>
                  <p>GMT +08:00</p>
                </div>

                <div className='info-box currency'>
                  <p style={{ fontWeight: 600 }}>Mata Uang</p>
                  <p>Rupiah</p>
                  <p>1 USD = 14.545.39 IDR</p>
                </div>

                <div className='info-box time-traveler'>
                  <p style={{ fontWeight: 600 }}>
                    Waktu Terbaik Untuk Berkunjung
                  </p>

                  {detailDestination.data?.data?.data?.destination?.best_time_to_visit
                    .split('\n')
                    .map((item, index) => (
                      <p>{item}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
