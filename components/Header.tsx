'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-pacifico text-white hover:text-red-200 transition-colors">
            Munduvu à petit prix
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Accueil
            </Link>
            <Link href="/vetements" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Vêtements
            </Link>
            <Link href="/chaussures" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Chaussures
            </Link>
            <Link href="/casques" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Casques
            </Link>
            <Link href="/enfants" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Enfants
            </Link>
            <Link href="/contact" className="hover:text-red-200 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-6 h-6 flex items-center justify-center hover:text-red-200 transition-colors cursor-pointer"
            >
              <i className="ri-search-line text-xl"></i>
            </button>
            <Link href="/panier" className="w-6 h-6 flex items-center justify-center hover:text-red-200 transition-colors cursor-pointer">
              <i className="ri-shopping-cart-line text-xl"></i>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-6 h-6 flex items-center justify-center hover:text-red-200 transition-colors cursor-pointer"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <input 
              type="text" 
              placeholder="Rechercher des produits..."
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        )}

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block hover:text-red-200 transition-colors cursor-pointer">
              Accueil
            </Link>
            <Link href="/vetements" className="block hover:text-red-200 transition-colors cursor-pointer">
              Vêtements
            </Link>
            <Link href="/chaussures" className="block hover:text-red-200 transition-colors cursor-pointer">
              Chaussures
            </Link>
            <Link href="/casques" className="block hover:text-red-200 transition-colors cursor-pointer">
              Casques
            </Link>
            <Link href="/enfants" className="block hover:text-red-200 transition-colors cursor-pointer">
              Enfants
            </Link>
            <Link href="/contact" className="block hover:text-red-200 transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}