
import React from 'react';
import AccountCard from '../components/AccountCard';
import Header from '../components/Header';

const Accounts = () => {
  return (
    <div className="min-h-screen bg-gray-50 pl-60">
      <Header />
      
      <main className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Comptes & Contrats</h2>
          <p className="text-gray-500">Votre situation au jeudi 16 avril 2015</p>
        </div>
        
        <div className="bg-white rounded-lg mb-8 animate-fade-in">
          <div className="grid grid-cols-3 divide-x">
            <button className="py-3 font-medium text-bank-blue border-b-2 border-bank-blue">
              TOUS LES COMPTES
            </button>
            <button className="py-3 font-medium text-gray-600 hover:text-bank-blue transition-colors">
              MES COMPTES
            </button>
            <button className="py-3 font-medium text-gray-600 hover:text-bank-blue transition-colors">
              AUTRES COMPTES
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Comptes et cartes</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AccountCard
              type="COMPTE COURANT"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="00111 202928 01"
              balance={1072.00}
              link="/accounts/current"
            />
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow-md border border-gray-100 p-5 animate-fade-in">
            <h4 className="font-medium mb-4">Dépenses cartes prélevées</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span>Total des dépenses cartes prélevées fin novembre 2013</span>
                <span className="text-bank-negative font-medium">-1 477,01 EUR</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span>Total des dépenses cartes prélevées fin décembre 2013</span>
                <span className="text-bank-negative font-medium">-200,66 EUR</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Épargne et placements</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AccountCard
              type="LIVRET EPARGNE"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="00111 202928 02"
              balance={2228.79}
              link="/accounts/savings"
            />
            
            <AccountCard
              type="PLAN D'EPARGNE LOGEMENT"
              name="MME ANNE HOUVRET JOSIANE"
              accountNumber="47575 200934 10"
              balance={810.74}
              link="/accounts/housing"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accounts;
