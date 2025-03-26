
import React from 'react';
import AccountCard from '../components/AccountCard';
import TransactionsList from '../components/TransactionsList';
import Header from '../components/Header';
import { LineChart, BarChart } from 'lucide-react';

const Dashboard = () => {
  const recentTransactions = [
    { id: '1', date: '01/12/2013', description: 'PAIEMENT CB PARIS', details: 'LIBRAIRIE DES CONTADES', amount: -23.58, type: 'card' },
    { id: '2', date: '25/11/2013', description: 'PRLV FIXE ADSL', details: '00090304795487357', amount: -35.79, type: 'debit' },
    { id: '3', date: '25/11/2013', description: 'PAIEMENT CB LILLE', details: 'PARKING GARE', amount: -9.40, type: 'card' },
    { id: '4', date: '25/11/2013', description: 'PRLV ELECTRICITE', details: 'EDF OCT NOV', amount: -148.79, type: 'debit' },
    { id: '5', date: '23/11/2013', description: 'VIRT SALAIRE', amount: 1748.00, type: 'transfer' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pl-60">
      <Header />
      
      <main className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Situation financière</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AccountCard
              type="COMPTE COURANT"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="00111 202928 01"
              balance={15808709}
              link="/accounts/current"
            />
            
            <AccountCard
              type="LIVRET EPARGNE"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="00111 202928 02"
              balance={2228.79}
              link="/accounts/savings"
            />
            
            <AccountCard
              type="CREDIT AUTO"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="00111 202928 30"
              balance={-693.43}
              link="/loans/auto"
              isCredit={true}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsList
              transactions={recentTransactions}
              title="Dernières opérations"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 animate-fade-in">
            <h3 className="font-medium text-bank-blue mb-4">Aperçu financier</h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">Dépenses par catégorie</span>
                  <BarChart size={18} className="text-bank-blue" />
                </div>
                <div className="h-40 flex items-center justify-center text-gray-400">
                  Graphique des dépenses
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">Évolution du solde</span>
                  <LineChart size={18} className="text-bank-blue" />
                </div>
                <div className="h-40 flex items-center justify-center text-gray-400">
                  Graphique d'évolution
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <a href="/analytics" className="text-sm text-bank-blue hover:underline">
                Voir toutes les analyses
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
