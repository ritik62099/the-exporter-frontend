import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const PlaceOrderPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signup');
    }
  }, [isAuthenticated, navigate]);
  

  return (
    <div>
      <h1>Place Your Order</h1>
      {/* Your form or content here */}
    </div>
  );
};

export default PlaceOrderPage;
