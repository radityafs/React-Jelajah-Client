import React, { useEffect, useState } from 'react';
import Bali from '../assets/bali.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { MdOutlineTimer } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetailActivity } from '../redux/actions/activity';
import Swal from 'sweetalert2';
import '../css/DestinationPages.css';

export default function DestinationPages() {
  const [form, setForm] = useState({
    activity_id: '',
    date: new Date(),
    title: '',
    quantity: 1
  });

  const [activity, setActivity] = useState({
    isLoading: true,
    isError: false,
    data: []
  });

  const navigate = useNavigate();
  const { activity_id } = useParams();

  const getActivity = async () => {
    await getDetailActivity(activity_id, setActivity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getActivity();

    setForm({
      ...form,
      activity_id: activity_id
    });
  }, []);

  useEffect(() => {
    if (activity.isError) {
      navigate('/explore');
    }

    setForm({
      ...form,
      title: activity?.data?.data?.name,
      price: activity?.data?.data?.price
    });
  }, [activity]);

  return (
    <>
      <Header />
      <section className='bannerDestination-top'>
        <div className='container-md'>
          <div
            id='carouselExampleIndicators'
            class='carousel slide'
            data-bs-ride='carousel'
          >
            <div class='carousel-indicators'>
              {activity?.data?.data?.listImage?.map((item, index) => {
                return (
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to={index}
                    class={index === 0 ? 'active' : ''}
                  ></button>
                );
              })}
            </div>
            <div class='carousel-inner'>
              {activity?.data?.data?.listImage?.map((item, index) => {
                return (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <img
                      src={item.name}
                      className='d-block w-100'
                      alt={item.name}
                    />
                  </div>
                );
              })}
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className='destination-content'>
        <div className='container-md'>
          <div className='box-detail-dest'>
            <div className='row'>
              <div className='title-destination'>
                <h2>{activity?.data?.data?.name}</h2>
              </div>

              <div
                className='box-detail-dest-left'
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <div className='rating'>
                  <FaStar style={{ marginRight: '5px' }} />
                  4.8
                </div>

                <div className='review-count'>
                  (
                  <span
                    style={{
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px'
                    }}
                  >
                    60 Ulasan
                  </span>
                  )
                </div>
                <span style={{ marginLeft: 10, marginRight: 10 }}> • </span>
                <div className='order-count'>10K+ Kali Dipesan</div>
              </div>
              <div className='col-lg-9 col-md-8'>
                <div
                  className='about-destination'
                  style={{
                    marginTop: '20px'
                  }}
                >
                  <div
                    className='box-about'
                    style={{
                      display: 'flex',
                      marginBottom: '15px',
                      marginTop: '50px'
                    }}
                  >
                    <div
                      className='box-decoration'
                      style={{
                        width: '5px',
                        height: '25px',
                        backgroundColor: 'orange',
                        marginRight: '15px'
                      }}
                    ></div>
                    <h2 style={{ fontSize: '24px' }}>Tentang Aktivitas Ini</h2>
                  </div>

                  <p style={{ fontSize: '16px' }}>
                    {activity?.data?.data?.description}
                  </p>
                </div>
                <div
                  className='box-note'
                  style={{
                    display: 'flex',
                    marginBottom: '15px',
                    marginTop: '50px'
                  }}
                >
                  <div
                    className='box-decoration'
                    style={{
                      width: '5px',
                      height: '25px',
                      backgroundColor: 'orange',
                      marginRight: '15px'
                    }}
                  ></div>
                  <h2 style={{ fontSize: '24px' }}>Catatan</h2>
                </div>

                <ul style={{ width: '90%', fontSize: '16px' }}>
                  {activity?.data?.data?.note
                    .split('\\n')
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>

              <div className='col-lg-3 col-md-4'>
                <div
                  className='box-order-dest'
                  style={{
                    widht: '100%',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 0px 10px',
                    height: '500px',
                    borderRadius: '10px',
                    padding: '20px'
                  }}
                >
                  <div className='top-price'>
                    <b style={{ fontWeight: '600', fontSize: '24px' }}>
                      Rp. {activity?.data?.data?.price.toLocaleString()}
                    </b>
                    <p style={{ fontSize: '14px' }}>
                      Harga terbaik! Jaminan uang kembali
                    </p>
                  </div>

                  <div className='box-order-dest-bottom'>
                    <div
                      className='section-dest-bottom'
                      style={{
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <AiFillThunderbolt
                        style={{
                          fontSize: '24px',
                          color: 'orange',
                          marginRight: '10px'
                        }}
                      />
                      <p style={{ marginBottom: 0, fontSize: '14px' }}>
                        Konfirmasi Instant
                      </p>
                    </div>
                    <div
                      className='section-dest-bottom'
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <MdOutlineTimer
                        style={{
                          fontSize: '24px',
                          color: 'orange',
                          marginRight: '10px'
                        }}
                      />
                      <p style={{ marginBottom: 0, fontSize: '14px' }}>
                        Dapat dipesan untuk besok
                      </p>
                    </div>
                  </div>

                  <div
                    className='box-order-date'
                    style={{ marginTop: '10px', widht: '100%' }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        marginTop: '15px',
                        marginBottom: 5
                      }}
                    >
                      Date
                    </p>

                    <DatePicker
                      className='datepicker-order'
                      placeholderText='Select a date'
                      onChange={(date) => setForm({ ...form, date })}
                      value={form.date}
                      selected={form.date}
                      minDate={new Date()}
                      style={{ width: '100%' }}
                    />
                    <FaCalendarAlt className='calender-order' />
                  </div>

                  <p
                    style={{
                      fontSize: '14px',
                      marginTop: '15px',
                      marginBottom: 5
                    }}
                  >
                    Quantity
                  </p>

                  <div className='box-amount-order'>
                    <b style={{ fontWeight: '600' }}>Person</b>

                    <div className='right-amount'>
                      <BsChevronLeft
                        className='left-icon'
                        onClick={() =>
                          setForm({
                            ...form,
                            quantity: form.quantity == 1 ? 1 : form.quantity - 1
                          })
                        }
                      />
                      <div className='amount-box' style={{ widht: 0 }}>
                        {form.quantity}
                      </div>
                      <BsChevronRight
                        className='right-icon'
                        onClick={() =>
                          setForm({ ...form, quantity: form.quantity + 1 })
                        }
                      />
                    </div>
                  </div>

                  <div
                    className='box-button-order'
                    style={{
                      widht: '100%',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <button
                      className='btn-order'
                      onClick={(e) => {
                        navigate('/checkout', {
                          state: {
                            activity: activity?.data?.data,
                            form
                          }
                        });
                      }}
                    >
                      <b>Book Now</b>
                    </button>
                  </div>
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
