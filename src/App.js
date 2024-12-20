// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRegister from './components/CustomerRegistration';
import AdminRegister from './components/AdminRegistration';
import AdminLogin from './components/AdminLogin';
import TestConnection from './components/TestConnection';
import VerifyEmail from './components/VerifyEmail';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register/customer" element={<CustomerRegister />} />
          <Route path="/test" element={<TestConnection />} />
          <Route path="/register/admin" element={<AdminRegister />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/login/admin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
