import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from '../components/AdminRegistration';
import CustomerRegister from '../components/CustomerRegistration';
import AdminLogin from '../components/AdminLogin';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerRegister />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
