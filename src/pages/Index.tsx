
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-pulse-soft">
          <h1 className="text-2xl font-bold text-bank-blue">Chargement...</h1>
          <p className="text-gray-600 mt-2">Veuillez patienter</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
