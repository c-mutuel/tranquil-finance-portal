
import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Login = () => {
  const [username, setUsername] = useState('30122520');
  const [password, setPassword] = useState('Houvret0230');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 animate-scale-in">
          <h1 className="text-2xl font-medium text-center text-bank-blue mb-6">
            Accéder à mes comptes
          </h1>
          
          <div className="flex items-center justify-center mb-6 text-sm">
            <Lock size={16} className="text-green-600 mr-2" />
            <span className="text-green-600 font-medium">Connexion sécurisée</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Identifiant
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <button type="submit" className="w-full button-primary py-3">
                Se connecter
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-bank-blue hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Besoin d'aide ? <a href="#" className="text-bank-blue hover:underline">Contactez-nous</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
