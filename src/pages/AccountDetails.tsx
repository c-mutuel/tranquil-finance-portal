
import React from 'react';
import Header from '../components/Header';
import TransactionsList from '../components/TransactionsList';
import AccountHistoryFilters from '../components/AccountHistoryFilters';
import { ArrowLeft, FileText, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountDetails = () => {
  const navigate = useNavigate();
  
  const transactions = [
    { id: '9', date: '15/02/2025', description: 'VIREMENT A MME SYLVIE CLAIRBEAUX', amount: -150000, type: 'transfer' },
    { id: '1', date: '01/12/2013', description: 'PAIEMENT CB PARIS', details: 'LIBRAIRIE DES CONTADES', amount: -23.58, type: 'card' },
    { id: '2', date: '25/11/2013', description: 'PRLV FIXE ADSL', details: '00090304795487357', amount: -35.79, type: 'debit' },
    { id: '3', date: '25/11/2013', description: 'PAIEMENT CB LILLE', details: 'PARKING GARE', amount: -9.40, type: 'card' },
    { id: '4', date: '25/11/2013', description: 'PRLV ELECTRICITE', details: 'EDF OCT NOV', amount: -148.79, type: 'debit' },
    { id: '5', date: '23/11/2013', description: 'VIRT SALAIRE', amount: 1748.00, type: 'transfer' },
    { id: '6', date: '22/11/2013', description: 'RESTAURANT CHEZ MARIE', amount: -65.47, type: 'card' },
    { id: '7', date: '19/11/2013', description: 'PAIEMENT CB', details: 'SUPERMARCHE', amount: -33.68, type: 'card' },
    { id: '8', date: '15/11/2013', description: 'VIREMENT INTERNE', details: 'VERS PEL', amount: -500.00, type: 'transfer' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pl-60">
      <Header />
      
      <main className="p-6">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 text-bank-blue hover:text-opacity-80 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div>
            <p className="text-gray-500">00111 202928 01</p>
            <h2 className="text-2xl font-medium text-gray-800">COMPTE COURANT</h2>
            <p className="text-gray-700">MME ANNE HOUVRET JOSIANE</p>
          </div>
        </div>
        
        <div className="bg-bank-blue text-white p-6 rounded-lg mb-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p className="text-sm opacity-80">Solde</p>
              <p className="text-3xl font-semibold">+1 072,00 EUR</p>
              <p className="text-sm opacity-80 mt-1">Situation au 16/04/2015</p>
            </div>
            
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button className="flex items-center gap-2 bg-white text-bank-blue px-4 py-2 rounded-md font-medium transition-all hover:bg-opacity-90">
                <FileText size={18} />
                <span>Relevé</span>
              </button>
              
              <button className="flex items-center gap-2 bg-white text-bank-blue px-4 py-2 rounded-md font-medium transition-all hover:bg-opacity-90">
                <BarChart size={18} />
                <span>Graphique</span>
              </button>
            </div>
          </div>
        </div>
        
        <AccountHistoryFilters />
        
        <TransactionsList
          transactions={transactions}
        />
      </main>
    </div>
  );
};

export default AccountDetails;
