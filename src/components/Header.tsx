
import React from 'react';
import { Bell, Mail, Calendar, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 animate-fade-in">
      <div className="flex items-center">
        <h1 className="text-xl font-medium text-gray-800">
          Bonjour, <span className="text-bank-blue">ANNE HOUVRET JOSIANE</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-bank-blue text-white p-2 rounded-full">
          <span className="relative">
            <Mail size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-bank-red text-white rounded-full text-xs flex items-center justify-center">
              1
            </span>
          </span>
        </div>
        
        <div className="bg-bank-blue text-white p-2 rounded-full">
          <Bell size={18} />
        </div>
        
        <div className="bg-bank-blue text-white p-2 rounded-full">
          <Calendar size={18} />
        </div>
        
        <div className="bg-bank-red text-white p-2 rounded-full">
          <LogOut size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
