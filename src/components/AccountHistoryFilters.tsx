
import React, { useState } from 'react';
import { Search, Filter, Calendar, ChevronDown } from 'lucide-react';

const AccountHistoryFilters = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 mb-6 animate-fade-in">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Rechercher une opération"
              className="input-field pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </div>
          </div>
          
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2 text-bank-blue"
          >
            <Filter size={18} />
            <span>Filtres</span>
            <ChevronDown size={18} className={`transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {isFiltersOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Période
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="De"
                    className="input-field pr-10 w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Calendar size={16} />
                  </div>
                </div>
                
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="À"
                    className="input-field pr-10 w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Calendar size={16} />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type d'opération
              </label>
              <select className="input-field">
                <option value="">Tous</option>
                <option value="card">Carte bancaire</option>
                <option value="transfer">Virement</option>
                <option value="directDebit">Prélèvement</option>
                <option value="check">Chèque</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Montant
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Min"
                    className="input-field pr-10 w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    €
                  </div>
                </div>
                
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Max"
                    className="input-field pr-10 w-full"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    €
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 flex justify-end mt-2">
              <button className="button-primary">
                Appliquer les filtres
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountHistoryFilters;
