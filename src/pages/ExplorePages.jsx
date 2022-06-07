import React, { useState, useEffect } from 'react';
import '../css/ExplorePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CardDestination from '../atoms/CardDestination';
import { getDestination } from '../redux/actions/destination';
import { useDispatch, useSelector } from 'react-redux';
import {
  getActivityOfDestination,
  getDetailDestination
} from '../redux/actions/activity';

import Card from '../atoms/Card';

export default function ExplorePages() {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState([]);
  const [baliActivity, setBaliActivity] = useState([]);
  const [yogyakartaActivity, yogyakartaSetActivity] = useState([]);

  const destination = useSelector((state) => state.destination);

  const getActivity = async () => {
    await getActivityOfDestination('all', setActivity);
    await getDetailDestination(2, yogyakartaSetActivity);
    await getDetailDestination(1, setBaliActivity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getActivity();
    dispatch(getDestination());
  }, []);

  useEffect(() => {}, [activity]);

  return (
    <>
      <Header />
      <section className='container-md bannerTop'>
        <div className='topBanner'>
          <img
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1920/Countries/tbpsjym4gieclgexfszv.webp'
            alt='Bali'
          />
        </div>
      </section>

      <section className='container-md experiences'>
        <h1 style={{ fontWeight: 600, fontSize: '24px', marginBottom: 0 }}>
          Indonesia's must-visit cities
        </h1>

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
      </section>

      <section className='container-md experiences'>
        <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
          Popular activities in Bali
        </h1>

        <div className='popular-list'>
          {baliActivity.isError ? (
            <div className='error'>{baliActivity.error}</div>
          ) : baliActivity.isLoading ? (
            <div className='loading'>Loading...</div>
          ) : (
            baliActivity?.data?.data?.data?.activityPopular?.map(
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

      <section className='container-md experiences'>
        <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
          Popular activities in Yogyakarta
        </h1>

        <div className='popular-list'>
          {yogyakartaActivity.isError ? (
            <div className='error'>{yogyakartaActivity.error}</div>
          ) : yogyakartaActivity.isLoading ? (
            <div className='loading'>Loading...</div>
          ) : (
            yogyakartaActivity?.data?.data?.data?.activityPopular?.map(
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
              Explore more activities in Indonesia
            </h1>
            <p>{activity.data?.data?.data?.length} activities found</p>
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
            {activity.data?.data?.data?.map((item, index) => (
              <div className='col-md-6 col-lg-3 col-sm-6'>
                <CardDestination
                  key={index}
                  name={item.name}
                  activity_id={item.activity_id}
                  photo={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='info-destination'>
        <div className='container-md'>
          <div className='box-info-destination'>
            <div className='about-destination'>
              <h4>Tentang Indonesia</h4>
              <p style={{ fontSize: '14px' }}>
                Keajaiban alam Indonesia sudah sepatutnya dijelajahi. Dengan
                lebih dari 300 bahasa, 240 juta lebih populasi, dan 17.000
                pulau, Indonesia tak lain adalah simbol keberagaman. Sebagian
                besar wisatawan sudah pernah menjejakkan kakinya di
                pantai-pantai Bali, padahal masih banyak permata tersembunyi di
                negara ini, lho!
              </p>

              <p style={{ fontSize: '14px' }}>
                Eksplor keindahan terumbu karang Raja Ampat, yang dikenal
                sebagai salah satu spot menyelam terbaik di dunia, atau jelajahi
                Gunung Bromo saat fajar dengan suguhan pemandangan sunrise
                menakjubkan dari atas kawah. Destinasi lain yang wajib kamu
                kunjungi adalah Candi Borobudur, candi Buddha terbesar di dunia,
                kamu hanya perlu naik bus umum atau berkendara dengan mobil
                pribadi untuk menuju ke sana. Mudah, kan?
              </p>
            </div>

            <div className='weather-destination'>
              <h4>Cuaca Setempat</h4>

              <p>JAN - DEC</p>
              <h5 style={{ marginBottom: '15px', marginTop: 0 }}>
                33°C - 22°C
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
                  <p>DEC</p>
                  <p> Pemuteran Bay Festival & Denpasar Festival</p>
                  <p>JUL - AUG</p>
                  <p> Buleleng Festival & Sanur Village Festival</p>
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
