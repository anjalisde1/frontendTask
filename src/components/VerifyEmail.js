// src/components/VerifyEmail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Typography, Alert, Box, Container } from '@mui/material';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    } else {
      setError('Invalid or missing verification token');
      setLoading(false);
    }
  }, [token]);

  const verifyEmail = async (token) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/verify/${token}`);
      setMessage(response.data.message);
      setLoading(false);

      setTimeout(() => {
        navigate('/login/admin');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify email. Please try again later.');
      setLoading(false);
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
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Email Verification
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularProgress color="primary" />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Verifying your email...
            </Typography>
          </Box>
        ) : (
          <>
            {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          </>
        )}
      </Box>
    </Container>
  );
};

export default VerifyEmail;


