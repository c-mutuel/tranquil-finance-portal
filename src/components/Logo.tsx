
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-10 relative">
        <div className="absolute inset-0 bg-bank-red rounded-full" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        <div className="absolute inset-[2px] bg-white rounded-full" style={{ clipPath: 'polygon(50% 15%, 85% 50%, 50% 85%, 15% 50%)' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 bg-bank-red rounded-full"></div>
        </div>
      </div>
      <div className="text-sm font-medium">
        <div className="text-bank-blue">Crédit</div>
        <div className="text-bank-red">Mutuel</div>
      </div>
    </div>
  );
};

export default Logo;
