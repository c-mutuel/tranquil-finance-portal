
import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AccountCardProps {
  type: string;
  name: string;
  accountNumber: string;
  balance: number;
  currency?: string;
  link: string;
  isCredit?: boolean;
}

const AccountCard: React.FC<AccountCardProps> = ({
  type,
  name,
  accountNumber,
  balance,
  currency = 'EUR',
  link,
  isCredit = false
}) => {
  // Format balance with spaces for thousands
  const formattedBalance = Math.abs(balance).toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  // Determine the sign and color based on whether it's a credit account or regular account
  const displaySign = isCredit ? (balance < 0 ? '-' : '+') : (balance >= 0 ? '+' : '-');
  const colorClass = isCredit 
    ? (balance < 0 ? 'text-bank-negative' : 'text-bank-positive') 
    : (balance >= 0 ? 'text-bank-positive' : 'text-bank-negative');

  return (
    <div className="account-card animate-scale-in">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="text-sm text-gray-500 uppercase">{type}</div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500">N°{accountNumber}</div>
        </div>
        <div className="flex gap-2">
          <Link to={link} className="text-bank-blue hover:text-opacity-80 transition-colors">
            <Eye size={20} />
          </Link>
        </div>
      </div>
      
      <div className={`mt-4 text-2xl font-semibold ${colorClass}`}>
        {displaySign}{formattedBalance} {currency}
      </div>
      
      <div className="mt-4 flex justify-end">
        <Link 
          to={link} 
          className="flex items-center text-sm text-bank-blue hover:underline"
        >
          Voir les détails
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default AccountCard;
