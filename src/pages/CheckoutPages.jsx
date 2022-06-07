import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/CheckoutPages.css';
import { FcHighPriority } from 'react-icons/fc';
import { FaCheckCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function CheckoutPages() {
  const [data, setData] = useState({
    activity_id: '',
    full_name: '',
    email: '',
    phone: '',
    quantity: 1,
    total_price: 0,
    status: 0,
    insurance: 0
  });

  const [passenger, setPassenger] = useState({
    full_name: '',
    email: '',
    phone: ''
  });

  const order = async () => {
    if (data.full_name !== '' || data.email !== '' || data.phone !== '') {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.post('http://localhost:8080/order', data, {
          headers: {
            token: token
          }
        });
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your order has been placed'
          });
          navigate('/mybooking');
        }
      } catch (e) {
        if (e.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonColor: '#3085d6',
            timer: 2000
          });

          localStorage.removeItem('token');
          navigate('/login');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonColor: '#3085d6',
            timer: 2000
          });
        }
      }
    } else {
      //swall fire error form empty
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill the form correctly!',
        confirmButtonColor: '#3085d6',
        timer: 2000
      });
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state);
    window.scrollTo(0, 0);

    if (!location.state) {
      navigate('/');
    }

    setData({
      ...data,
      activity_id: location.state.activity.activity_id,
      total_price: location.state.activity.price * location.state.form.quantity,
      quantity: location.state.form.quantity
    });
  }, []);

  return (
    <>
      <Header />
      <section
        className='checkout-section'
        style={{
          paddingTop: '60px',
          height: '1500px',
          backgroundColor: '#F5F6FA'
        }}
      >
        <div
          className='top-bar'
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: '#2395FF',
            borderRadius: '0 0 25px 25px'
          }}
        >
          <div className='container-md' style={{ paddingTop: '50px' }}>
            <div className='row'>
              <div className='col-lg-8 col-md-8 col-md-12'>
                <p
                  style={{
                    fontSize: '24px',
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: '25px'
                  }}
                >
                  Contact Person Details
                </p>

                <div
                  className='box-form-contact'
                  style={{
                    widht: '100%',
                    backgroundColor: 'white',
                    height: '400px',
                    borderRadius: '15px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setData({
                        ...data,
                        full_name: e.target.value
                      });
                    }}
                    value={data?.full_name}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value
                      });
                    }}
                    value={data?.email}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setData({
                        ...data,
                        phone: e.target.value
                      });
                    }}
                    value={data?.phone}
                  />
                  <div
                    className='box-danger'
                    style={{
                      widht: '100%',
                      backgroundColor: 'rgba(242, 69, 69, 0.1)',
                      height: '50px',
                      borderRadius: '10px',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px',
                      flexDirection: 'row'
                    }}
                  >
                    <FcHighPriority
                      style={{ fontSize: '25px', marginRight: '10px' }}
                    />

                    <p style={{ marginBottom: 0, color: '#595959' }}>
                      Make sure the customer data is correct.
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    marginTop: '50px',
                    marginBottom: '25px',
                    fontWeight: '600'
                  }}
                >
                  Passenger Details
                </p>

                <div
                  className='box-passenger'
                  style={{
                    height: '400px',
                    widht: '100%',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    className='box-passenger-item'
                    style={{
                      widht: '100%',
                      backgroundColor: 'rgb(35, 149, 255,0.1)',
                      height: '50px',
                      borderRadius: '10px',
                      borderRadius: '15px',
                      marginBottom: '20px',
                      paddingLeft: '25px',
                      paddingRight: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}
                  >
                    <p style={{ marginBottom: 0 }}>
                      Passenger : {location?.state?.form?.quantity} Person
                    </p>

                    <div
                      className='toggle-same'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '100%',
                        alignItems: 'center'
                      }}
                    >
                      <p style={{ marginBottom: 0, marginRight: '25px' }}>
                        Same as contact person
                      </p>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          checked={data?.checked}
                          onChange={() => {
                            setData({
                              ...data,
                              checked: !data.checked
                            });
                          }}
                        />
                        <span className='slider round' />
                      </label>
                    </div>
                  </div>
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setPassenger({
                        ...passenger,
                        full_name: e.target.value
                      });
                    }}
                    value={
                      data?.checked ? data?.full_name : passenger?.full_name
                    }
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setPassenger({
                        ...passenger,
                        email: e.target.value
                      });
                    }}
                    value={data?.checked ? data?.email : passenger?.email}
                  />
                  <label
                    htmlFor='full_name'
                    style={{
                      fontSize: '14px',
                      fontColor: '#9B96AB',
                      paddingLeft: '10px'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    style={{
                      width: '100%',
                      height: '50px',
                      border: 0,
                      borderBottom: '1px solid #D2C2FF',
                      marginBottom: '20px',
                      paddingLeft: '10px'
                    }}
                    onChange={(e) => {
                      setPassenger({
                        ...passenger,
                        phone: e.target.value
                      });
                    }}
                    value={data?.checked ? data?.phone : passenger?.phone}
                  />
                </div>
                <p
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    marginTop: '50px',
                    marginBottom: '25px',
                    fontWeight: '600'
                  }}
                >
                  Passenger Details
                </p>

                <div
                  className='box-passenger-detail'
                  style={{
                    widht: '100%',
                    height: '150px',
                    backgroundColor: '#FFF',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    className='insurance-top'
                    style={{
                      height: '50%',
                      borderBottom: '1px solid #E6E6E6',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      className='left-insurance-top'
                      style={{ display: 'flex', flexDirection: 'row' }}
                    >
                      <input
                        className='insurance-checkbox'
                        type='checkbox'
                        style={{
                          border: '1px solid #2395FF',
                          height: '20px',
                          widht: '20px',
                          marginRight: '10px'
                        }}
                        onChange={() => {
                          const insurance_price = 1000 * data.quantity;

                          setData({
                            ...data,
                            insurance: !data.insurance,
                            total_price: data.insurance
                              ? data.total_price - insurance_price
                              : data.total_price + insurance_price
                          });
                        }}
                        checked={data.insurance}
                      />

                      <h5 style={{ marginBottom: 0, fontSize: '18px' }}>
                        Travel Insurance
                      </h5>
                    </div>

                    <div className='right-insurance-top'>
                      <p
                        style={{
                          marginBottom: 0,
                          fontSize: '18px',
                          marginRight: '20px',
                          fontWeight: '600',
                          color: '#2395FF'
                        }}
                      >
                        Rp 10.000 / pax
                      </p>
                    </div>
                  </div>
                  <div
                    className='insurance-bottom'
                    style={{
                      height: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '25px'
                    }}
                  >
                    Get travel compensation up to Rp 10.000.000
                  </div>
                </div>

                <div
                  className='btn-submit'
                  style={{
                    marginTop: '40px',
                    widht: '100px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <button
                    style={{
                      height: '50px',
                      width: '300px',
                      border: 0,
                      backgroundColor: '#2395FF',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#FFF',
                      borderRadius: '10px'
                    }}
                    onClick={() => {
                      order();
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-0'>
                <div
                  className='title-detail'
                  style={{
                    display: 'flex',
                    flexDirections: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      fontSize: '24px',
                      color: 'white',
                      fontWeight: '600',
                      marginBottom: '25px'
                    }}
                  >
                    Itinerary Details
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'white',
                      marginBottom: '25px'
                    }}
                  >
                    View Details
                  </p>
                </div>

                <div
                  className='box-detail-order'
                  style={{
                    widht: '100%',
                    backgroundColor: '#FFF',
                    height: '375px',
                    borderRadius: '15px',
                    padding: '20px'
                  }}
                >
                  <h2
                    style={{
                      fontSize: '18px',
                      widht: '100%',
                      marginTop: '10px',
                      marginBottom: '20px'
                    }}
                  >
                    {location?.state?.activity?.name}
                  </h2>

                  <p style={{ marginBottom: '30px' }}>
                    {location?.state?.form?.date?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>

                  <div
                    className='include-list'
                    style={{
                      marginBottom: '50px'
                    }}
                  >
                    <div
                      className='list-include'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '20px',
                        color: '#2395FF'
                      }}
                    >
                      <FaCheckCircle style={{ marginRight: '10px' }} />

                      <p style={{ marginBottom: 0, fontWeight: '500' }}>
                        Refundable
                      </p>
                    </div>
                    <div
                      className='list-include'
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '25px',
                        color: '#2395FF'
                      }}
                    >
                      <FaCheckCircle style={{ marginRight: '10px' }} />

                      <p style={{ marginBottom: 0, fontWeight: '500' }}>
                        Can reschedule
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div
                    className='price-order'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '25px',
                      justifyContent: 'space-between'
                    }}
                  >
                    <h5>Total Payment</h5>

                    <h5>Rp. {data.total_price.toLocaleString()}</h5>
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
