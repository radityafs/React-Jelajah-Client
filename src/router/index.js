import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ForgotPages from '../pages/ForgotPages';
import ExplorePages from '../pages/ExplorePages';
import MyBookingPage from '../pages/MyBookingPage';
import BookingPassPages from '../pages/BookingPassPages';
import MyProfilePages from '../pages/MyProfilePages';
import CheckoutPages from '../pages/CheckoutPages';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return children;
  }

  return <Navigate to='/login' />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return children;
  }
  return <Navigate to='/' />;
}

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />} />
        </Route>
        <Route
          path='/signUp'
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path='/forgot'
          element={
            <PublicRoute>
              <ForgotPages />
            </PublicRoute>
          }
        />

        <Route path='/profile' element={<MyProfilePages />} />
        <Route path='/mybooking' element={<MyBookingPage />} />
        <Route path='/bookingpass' element={<BookingPassPages />} />
        <Route path='/explore/:destination' element={<ExplorePages />} />
        <Route path='/checkout' element={<CheckoutPages />} />
      </Routes>
    </BrowserRouter>
  );
}
