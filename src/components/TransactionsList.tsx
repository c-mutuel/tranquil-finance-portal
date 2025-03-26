
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  details?: string;
  amount: number;
  type: string;
}

interface TransactionsListProps {
  transactions: Transaction[];
  title?: string;
}

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 animate-fade-in">
      {title && (
        <div className="px-5 py-3 border-b border-gray-200">
          <h3 className="font-medium text-bank-blue">{title}</h3>
        </div>
      )}
      
      <div className="max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="py-3 px-5 text-left">Date</th>
              <th className="py-3 px-5 text-left">Opérations</th>
              <th className="py-3 px-5 text-right">Montant</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              const isPositive = transaction.amount >= 0;
              const formattedAmount = Math.abs(transaction.amount).toLocaleString('fr-FR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              });
              
              return (
                <tr 
                  key={transaction.id} 
                  className="transaction-row hover:cursor-pointer"
                >
                  <td className="py-3 px-5 text-sm">{transaction.date}</td>
                  <td className="py-3 px-5">
                    <div className="font-medium">{transaction.description}</div>
                    {transaction.details && (
                      <div className="text-sm text-gray-500">{transaction.details}</div>
                    )}
                  </td>
                  <td className={`py-3 px-5 text-right font-medium ${isPositive ? 'text-bank-positive' : 'text-bank-negative'}`}>
                    {isPositive ? '+' : '-'}{formattedAmount} EUR
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="px-5 py-3 border-t border-gray-200 flex justify-center text-bank-blue hover:text-opacity-80 transition-colors cursor-pointer">
        <span className="text-sm font-medium">Voir plus d'opérations</span>
        <ChevronDown size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default TransactionsList;
