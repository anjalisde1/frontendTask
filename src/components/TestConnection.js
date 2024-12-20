import React, { useEffect } from 'react';
import axios from 'axios';

const TestConnection = () => {
  useEffect(() => {
    const testBackendConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test');
        console.log('Backend response:', response.data);
      } catch (error) {
        console.error('Error connecting to backend:', error);
      }
    };

    testBackendConnection();
  }, []);

  return (
    <div>
      <h1>Testing Connection to Backend</h1>
    </div>
  );
};

export default TestConnection;
