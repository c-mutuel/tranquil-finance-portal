
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, PiggyBank, Wallet, FileText, BarChart3 } from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Comptes & cartes', path: '/accounts', icon: CreditCard },
    { name: 'Épargne & placements', path: '/savings', icon: PiggyBank },
    { name: 'Crédits', path: '/loans', icon: Wallet },
    { name: 'Virements', path: '/transfers', icon: FileText },
    { name: 'Graphiques', path: '/analytics', icon: BarChart3 },
  ];

  return (
    <div className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 animate-slide-in-left">
      <div className="p-4 border-b border-gray-200">
        <Logo />
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`sidebar-link ${isActive ? 'active' : 'hover:bg-gray-100'}`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Dernière connexion:</span>
          <span className="font-medium">16/04/2023 15:30</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
