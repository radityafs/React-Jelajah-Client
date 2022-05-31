import React from 'react';
import '../css/ExplorePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BaliImage from '../assets/bali.jpg';
import BaliHead from '../assets/BaliHead.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FaStar } from 'react-icons/fa';

export default function ExplorePages() {
  return (
    <>
      <Header />
      <section className='container-md bannerTop'>
        <div className='topBanner'>
          <img src={BaliHead} alt='Bali' />
        </div>
      </section>

      <section className='container-md experiences'>
        <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
          Popular activities in Bali
        </h1>

        <div className='popular-list'>
          <div className='card-popular'>
            <img src={BaliImage} alt='Bali' />
            <div className='card-body'>
              <h5 className='card-title'>Nusa Penida Day Tour from Bali </h5>
              <p className='card-info'>
                <div className='star'>
                  <FaStar style={{ color: 'orange' }} />{' '}
                  <span>4.8(3,568) • 40K+ booked</span>
                </div>
                <div className='feature-list'>
                  <div className='box-feature'>Best Seller</div>
                  <div className='box-feature'>Instant Confirmation</div>
                </div>
                <hr />
                <div className='price'>
                  <span>From </span>

                  <p>IDR </p>
                  <p>1,000,000</p>
                </div>
              </p>
            </div>
          </div>
          <div className='card-popular'>
            <img src={BaliImage} alt='Bali' />
            <div className='card-body'>
              <h5 className='card-title'>Nusa Penida Day Tour from Bali </h5>
              <p className='card-info'>
                <div className='star'>
                  <FaStar style={{ color: 'orange' }} />{' '}
                  <span>4.8(3,568) • 40K+ booked</span>
                </div>
                <div className='feature-list'>
                  <div className='box-feature'>Best Seller</div>
                  <div className='box-feature'>Instant Confirmation</div>
                </div>
                <hr />
                <div className='price'>
                  <span>From </span>

                  <p>IDR </p>
                  <p>1,000,000</p>
                </div>
              </p>
            </div>
          </div>
          <div className='card-popular'>
            <img src={BaliImage} alt='Bali' />
            <div className='card-body'>
              <h5 className='card-title'>Nusa Penida Day Tour from Bali </h5>
              <p className='card-info'>
                <div className='star'>
                  <FaStar style={{ color: 'orange' }} />{' '}
                  <span>4.8(3,568) • 40K+ booked</span>
                </div>
                <div className='feature-list'>
                  <div className='box-feature'>Best Seller</div>
                  <div className='box-feature'>Instant Confirmation</div>
                </div>
                <hr />
                <div className='price'>
                  <span>From </span>

                  <p>IDR </p>
                  <p>1,000,000</p>
                </div>
              </p>
            </div>
          </div>
          <div className='card-popular'>
            <img src={BaliImage} alt='Bali' />
            <div className='card-body'>
              <h5 className='card-title'>Nusa Penida Day Tour from Bali </h5>
              <p className='card-info'>
                <div className='star'>
                  <FaStar style={{ color: 'orange' }} />{' '}
                  <span>4.8(3,568) • 40K+ booked</span>
                </div>
                <div className='feature-list'>
                  <div className='box-feature'>Best Seller</div>
                  <div className='box-feature'>Instant Confirmation</div>
                </div>
                <hr />
                <div className='price'>
                  <span>From </span>

                  <p>IDR </p>
                  <p>1,000,000</p>
                </div>
              </p>
            </div>
          </div>
          <div className='card-popular'>
            <img src={BaliImage} alt='Bali' />
            <div className='card-body'>
              <h5 className='card-title'>Nusa Penida Day Tour from Bali </h5>
              <p className='card-info'>
                <div className='star'>
                  <FaStar style={{ color: 'orange' }} />{' '}
                  <span>4.8(3,568) • 40K+ booked</span>
                </div>
                <div className='feature-list'>
                  <div className='box-feature'>Best Seller</div>
                  <div className='box-feature'>Instant Confirmation</div>
                </div>
                <hr />
                <div className='price'>
                  <span>From </span>

                  <p>IDR </p>
                  <p>1,000,000</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='container-md experiences-list'>
        <div className='top-container-experience'>
          <div className='info-experience-list'>
            <h1 style={{ fontWeight: 600, fontSize: '24px' }}>
              Explore more activities in Bali
            </h1>
            <p>370 activities found</p>
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
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>
                    Nusa Penida Day Tour from Bali{' '}
                  </h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />{' '}
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>
                    Nusa Penida Day Tour from Bali{' '}
                  </h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />{' '}
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>
                    Nusa Penida Day Tour from Bali{' '}
                  </h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />{' '}
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-6'>
              <div className='card-popular'>
                <img src={BaliImage} alt='Bali' />
                <div className='card-body'>
                  <h5 className='card-title'>Nusa Penida Day Tour from Bali</h5>
                  <p className='card-info'>
                    <div className='star'>
                      <FaStar style={{ color: 'orange' }} />
                      <span>4.8(3,568) • 40K+ booked</span>
                    </div>
                    <div className='feature-list'>
                      <div className='box-feature'>Best Seller</div>
                      <div className='box-feature'>Instant Confirmation</div>
                    </div>
                    <hr />
                    <div className='price'>
                      <span>From </span>

                      <p>IDR </p>
                      <p>1,000,000</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='pagination'>
            <Stack spacing={2}>
              <Pagination count={10} color='primary' />
            </Stack>
          </div>
        </div>
      </section>

      <section className='info-destination'>
        <div className='container-md'>
          <div className='box-info-destination'>
            <div className='about-destination'>
              <h4>Tentang Bali</h4>
              <p>
                Jika kamu mencari tempat yang tepat untuk melarikan diri dari
                sibuknya kota, Bali adalah destinasi sempurna buat kamu. Pulau
                ini begitu populer dan menaungi bermacam spot budaya, Pura Ulun
                Danu Baratan adalah salah satunya. Habiskan hari di Subak
                Tegalalang dan kagumi bukit-bukit hijau yang cantik. Tantang
                diri kamu untuk mendaki Gunung Batur pada dini hari, lalu
                hadiahi diri dengan panorama sunrise cantik saat tiba di puncak.
                Jika kamu ingin kegiatan yang lebih menantang, ada beberapa
                aktivitas air yang sayang untuk dilewatkan, sebut saja
                flyboarding dan diving. Setelahnya saat senja beralih malam,
                nikmati sisa hari dengan party di kawasan Seminyak.
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
                  <p>OCT</p>
                  <p>Annual Ubud Wirters and Readers Festival</p>
                  <p>APR - SEP</p>
                  <p>Surfing dan Aktivitas Outdoor</p>
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
