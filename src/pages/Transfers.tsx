
import React from 'react';
import Header from '../components/Header';
import TransferForm from '../components/TransferForm';
import TransactionsList from '../components/TransactionsList';

const Transfers = () => {
  const transferHistory = [
    { id: '1', date: '16/04/2015', description: 'Virement vers LIVRET EPARGNE', amount: -500.00, type: 'transfer' },
    { id: '2', date: '22/03/2015', description: 'Facture EDF', amount: -148.79, type: 'transfer' },
    { id: '3', date: '15/11/2010', description: 'Virement Épargne', amount: 5000.00, type: 'transfer' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pl-60">
      <Header />
      
      <main className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Effectuer un virement</h2>
          <p className="text-gray-500">Virement entre vos comptes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransferForm />
          
          <div>
            <TransactionsList
              transactions={transferHistory}
              title="Historique des virements"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transfers;
