
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';
import Logo from '../components/Logo';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8">
        <Logo />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center animate-scale-in">
        <h1 className="text-4xl font-semibold text-bank-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          La page que vous recherchez n'existe pas
        </p>
        <p className="text-gray-500 mb-8">
          Vérifiez l'URL ou retournez à la page d'accueil
        </p>
        
        <Link
          to="/login"
          className="inline-flex items-center justify-center button-primary gap-2 px-8 py-3"
        >
          <HomeIcon size={18} />
          <span>Accueil</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
