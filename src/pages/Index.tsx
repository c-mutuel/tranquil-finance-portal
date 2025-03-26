
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  CreditCard, 
  PiggyBank, 
  Wallet, 
  Search, 
  User, 
  ChevronRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top navigation */}
      <div className="bg-gray-100 py-2 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/particuliers" className="text-sm text-gray-600 hover:text-bank-blue">Particuliers</Link>
            <Link to="/professionnels" className="text-sm text-gray-600 hover:text-bank-blue">Professionnels</Link>
            <Link to="/entreprises" className="text-sm text-gray-600 hover:text-bank-blue">Entreprises</Link>
            <Link to="/associations" className="text-sm text-gray-600 hover:text-bank-blue">Associations</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#" className="text-sm text-gray-600 hover:text-bank-blue flex items-center">
              <Search size={14} className="mr-1" />
              Rechercher
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-bank-blue flex items-center">
              <User size={14} className="mr-1" />
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-gray-700 hover:text-bank-blue font-medium">Nos offres</Link>
            <Link to="#" className="text-gray-700 hover:text-bank-blue font-medium">Services en ligne</Link>
            <Link to="#" className="text-gray-700 hover:text-bank-blue font-medium">Agences</Link>
            <Link to="#" className="text-gray-700 hover:text-bank-blue font-medium">À propos</Link>
          </div>
          <div>
            <Link to="/login" className="bg-bank-red text-white py-2 px-4 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center">
              Accès à vos comptes
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-r from-bank-blue to-bank-blue-light text-white py-16 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Bienvenue sur votre espace bancaire en ligne</h1>
            <p className="text-lg mb-6">Gérez vos comptes, effectuez des virements et suivez vos opérations en toute sécurité.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/login" className="bg-white text-bank-blue py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-all inline-block text-center">
                Consulter vos comptes
              </Link>
              <Link to="#" className="border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all inline-block text-center">
                Devenir client
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
              <h2 className="text-bank-blue text-xl font-bold mb-4">Accès rapide</h2>
              <div className="space-y-3">
                <Link to="/login" className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-all">
                  <div className="flex items-center">
                    <CreditCard className="text-bank-blue mr-3" size={20} />
                    <span className="text-gray-800">Comptes et cartes</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <Link to="/login" className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-all">
                  <div className="flex items-center">
                    <PiggyBank className="text-bank-blue mr-3" size={20} />
                    <span className="text-gray-800">Épargne</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <Link to="/login" className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-all">
                  <div className="flex items-center">
                    <Wallet className="text-bank-blue mr-3" size={20} />
                    <span className="text-gray-800">Prêts et crédits</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <Link to="/login" className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-all">
                  <div className="flex items-center">
                    <Shield className="text-bank-blue mr-3" size={20} />
                    <span className="text-gray-800">Assurances</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Nos services bancaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-bank-blue-lighter rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-bank-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comptes et cartes</h3>
              <p className="text-gray-600 mb-4">Gérez vos comptes et vos cartes bancaires en toute simplicité.</p>
              <Link to="/login" className="text-bank-blue hover:underline font-medium flex items-center">
                En savoir plus
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-bank-blue-lighter rounded-full flex items-center justify-center mb-4">
                <PiggyBank className="text-bank-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Épargne</h3>
              <p className="text-gray-600 mb-4">Découvrez nos solutions d'épargne adaptées à vos projets.</p>
              <Link to="/login" className="text-bank-blue hover:underline font-medium flex items-center">
                En savoir plus
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-bank-blue-lighter rounded-full flex items-center justify-center mb-4">
                <Wallet className="text-bank-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prêts et crédits</h3>
              <p className="text-gray-600 mb-4">Financez vos projets avec nos solutions de crédit sur mesure.</p>
              <Link to="/login" className="text-bank-blue hover:underline font-medium flex items-center">
                En savoir plus
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security banner */}
      <section className="bg-bank-blue-lighter py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-bank-blue mb-2">Vos transactions en toute sécurité</h2>
            <p className="text-gray-600">Le Crédit Mutuel s'engage à protéger vos données et vos opérations bancaires avec les standards de sécurité les plus élevés.</p>
          </div>
          <div>
            <Link to="#" className="inline-flex items-center text-bank-blue font-medium hover:underline">
              <Shield className="mr-2" size={20} />
              Voir nos engagements
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Particuliers</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-300 hover:text-white">Comptes & Cartes</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Épargne</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Crédits</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Assurances</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Professionnels</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-300 hover:text-white">Gestion compte pro</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Financement</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Épargne pro</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Assurances pro</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Le Crédit Mutuel</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-300 hover:text-white">À propos</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Nos valeurs</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Recrutement</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Actualités</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Aide & Contact</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Nous contacter</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Trouver une agence</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Sécurité</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link to="#" className="text-sm text-gray-400 hover:text-white">Mentions légales</Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">Protection des données</Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">Cookies</Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-white">CGU</Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2023 Crédit Mutuel. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
