import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ForgotPassword from '../pages/ForgotPassword';

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />} />
        </Route>

        <Route path='/signUp' element={<RegisterPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
