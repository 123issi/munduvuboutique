'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-pacifico text-blue-400 mb-4">Munduvu à petit prix</h3>
            <p className="text-gray-300 mb-4">
              "Mi vann tout kalité, pa ser!" - Votre boutique de confiance à La Réunion
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/beatrice.munduvu" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://wa.me/262693639938" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li><Link href="/vetements" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Vêtements</Link></li>
              <li><Link href="/chaussures" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Chaussures</Link></li>
              <li><Link href="/casques" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Casques Audio</Link></li>
              <li><Link href="/enfants" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Mode Enfant</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link href="/livraison" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Livraison Gratuite</Link></li>
              <li><Link href="/retours" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Retours & Échanges</Link></li>
              <li><Link href="/aide" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Centre d'Aide</Link></li>
              <li><Link href="/conditions" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <i className="ri-map-pin-line mr-2"></i>
                42 Petit Marché, Rue Maréchal Leclerc<br />
                Saint-Denis, La Réunion
              </p>
              <p>
                <i className="ri-phone-line mr-2"></i>
                <a href="tel:+262693639938" className="hover:text-blue-400 transition-colors cursor-pointer">
                  06 93 63 99 38
                </a>
              </p>
              <p>
                <i className="ri-mail-line mr-2"></i>
                <a href="mailto:munduvuapetit@gmail.com" className="hover:text-blue-400 transition-colors cursor-pointer">
                  munduvuapetit@gmail.com
                </a>
              </p>
              <p>
                <i className="ri-global-line mr-2"></i>
                <a href="https://www.munduvuapetitprix.boutique" className="hover:text-blue-400 transition-colors cursor-pointer">
                  munduvuapetitprix.boutique
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Munduvu à petit prix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}