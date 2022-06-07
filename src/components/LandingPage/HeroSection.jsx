import React, { useState } from 'react';
import Background from '../../assets/home_bg.jpg';
import Search from '../../assets/search.svg';
import Overlay from '../../assets/overlay.svg';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt, FaLongArrowAltRight } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [startDate, setStartDate] = useState(new Date());
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/explore`, {
      state: {
        search,
        startDate
      }
    });
  };
  return (
    <section className='search-section'>
      <div className='container-md'>
        <div className='title'>
          Find Your{' '}
          <div className='title-blue' style={{ color: '#2395ff' }}>
            Destination
          </div>
          <p>and explore Indonesia with us</p>
        </div>

        <div className='top-hero'>
          <img src={Background} alt='Hero' />
        </div>

        <div className='box-search'>
          <h5>Hey,</h5>
          <h5>Where you want to go?</h5>

          <div className='input-group'>
            <input
              type='text'
              placeholder='Search for a destination or activity'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={Search} alt='search' />
          </div>

          <div className='input-group'>
            <DatePicker
              placeholderText='Select a date'
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              value={startDate}
              selected={startDate}
            />
            <FaCalendarAlt
              style={{
                position: 'absolute',
                right: 20,
                top: 40,
                fontSize: 20
              }}
            />
          </div>

          <button className='btn-search' onClick={handleSearch}>
            Search Destination
          </button>
          <FaLongArrowAltRight
            style={{
              position: 'absolute',
              right: 60,
              fontSize: 25,
              bottom: 55,
              color: '#fff'
            }}
          />
        </div>
        <div className='overlay'>
          <img src={Overlay} alt='overlay' />
        </div>

        <div className='bottom-hero'>
          <img src={Background} alt='Hero' />
        </div>
      </div>
    </section>
  );
}
