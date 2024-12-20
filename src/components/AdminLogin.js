// src/components/AdminLogin.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Alert, Box, Container } from '@mui/material';
import axios from 'axios';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', formData);
      setSuccessMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          p: 4,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 3 }}>
          Admin Login
        </Typography>

        {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            margin="normal"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AdminLogin;

