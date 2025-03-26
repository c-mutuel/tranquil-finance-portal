
import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
}

const TransferForm = () => {
  const [fromAccount, setFromAccount] = useState<string>('00111 202928 01');
  const [toAccount, setToAccount] = useState<string>('00111 202928 02');
  const [amount, setAmount] = useState<string>('');
  const [transferDate, setTransferDate] = useState<string>('');
  const [label, setLabel] = useState<string>('');
  
  const accounts: Account[] = [
    { id: '1', name: 'COMPTE COURANT', accountNumber: '00111 202928 01', balance: 15808709 },
    { id: '2', name: 'LIVRET EPARGNE', accountNumber: '00111 202928 02', balance: 2228.79 },
    { id: '3', name: 'PLAN D\'EPARGNE LOGEMENT', accountNumber: '47575 200934 10', balance: 810.74 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fromAccount,
      toAccount,
      amount,
      transferDate,
      label,
    });
    // Here you would handle the transfer logic
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 animate-fade-in">
      <h2 className="text-xl font-medium text-bank-blue mb-6">Effectuer un virement</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compte à débiter
              </label>
              <select 
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                className="input-field"
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.accountNumber}>
                    {account.name} - {account.accountNumber} - {account.balance.toLocaleString('fr-FR')} EUR
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Montant
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0,00"
                  className="input-field pr-12"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  EUR
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Libellé
              </label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Ex: Épargne mensuelle"
                className="input-field"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Compte à créditer
              </label>
              <select 
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                className="input-field"
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.accountNumber}>
                    {account.name} - {account.accountNumber} - {account.balance.toLocaleString('fr-FR')} EUR
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date d'exécution
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={transferDate}
                  onChange={(e) => setTransferDate(e.target.value)}
                  placeholder="JJ/MM/AAAA"
                  className="input-field pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Calendar size={16} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-end h-full">
              <div className="flex items-center gap-2 mt-6">
                <button
                  type="button"
                  className="button-secondary"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="button-primary"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransferForm;
