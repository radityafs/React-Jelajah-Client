import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ForgotPages from '../pages/ForgotPages';
import ExploreCityPages from '../pages/ExploreCityPages';
import ExplorePages from '../pages/ExplorePages';

import MyBookingPage from '../pages/MyBookingPage';
import BookingPassPages from '../pages/BookingPassPages';
import MyProfilePages from '../pages/MyProfilePages';
import CheckoutPages from '../pages/CheckoutPages';
import DestinationPages from '../pages/DestinationPages';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return children;
  }

  return <Navigate to='/signup' />;
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

        <Route path='/explore' element={<ExplorePages />} />
        <Route path='/explore/:destination_id' element={<ExploreCityPages />} />
        <Route path='/activity/:activity_id' element={<DestinationPages />} />
        <Route path='*' element={<LandingPage />} />

        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <MyProfilePages />
            </PrivateRoute>
          }
        />
        <Route
          path='/mybooking/'
          element={
            <PrivateRoute>
              <MyBookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/bookingpass/:id'
          element={
            <PrivateRoute>
              <BookingPassPages />
            </PrivateRoute>
          }
        />

        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <CheckoutPages />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
