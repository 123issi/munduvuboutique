'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { useState } from 'react';

const headphoneProducts = [
  {
    id: '21',
    name: 'JBL Tune 770NC - Casque Bluetooth Réduction Bruit',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20770NC%20wireless%20bluetooth%20headphones%20with%20active%20noise%20cancellation%2C%20premium%20black%20design%20with%20modern%20sleek%20appearance%2C%20professional%20electronics%20product%20photography%20with%20clean%20white%20background&width=400&height=400&seq=jbl770nc&orientation=squarish',
    category: 'JBL Premium',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '22',
    name: 'JBL Tune 520BT - Casque Sans Fil Léger',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20520BT%20wireless%20bluetooth%20headphones%20in%20vibrant%20blue%20color%2C%20lightweight%20comfortable%20design%20perfect%20for%20daily%20use%2C%20modern%20audio%20equipment%20photography%20with%20clean%20professional%20background&width=400&height=400&seq=jbl520bt&orientation=squarish',
    category: 'JBL Essentiel',
    rating: 4.6,
    reviews: 178
  },
  {
    id: '23',
    name: 'JBL Tune 510BT - Casque On-Ear Compact',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20510BT%20compact%20on-ear%20wireless%20headphones%2C%20modern%20design%20in%20white%20color%2C%20portable%20audio%20device%20with%20professional%20product%20photography%20and%20clean%20background&width=400&height=400&seq=jbl510bt&orientation=squarish',
    category: 'JBL Compact',
    rating: 4.4,
    reviews: 145
  },
  {
    id: '24',
    name: 'JBL Live 460NC - Casque Antibruit Avancé',
    price: 79.99,
    originalPrice: 119.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Live%20460NC%20advanced%20noise%20cancelling%20headphones%20with%20premium%20design%2C%20sophisticated%20black%20finish%2C%20professional%20audio%20equipment%20photography%20with%20clean%20studio%20background&width=400&height=400&seq=jbllive460&orientation=squarish',
    category: 'JBL Premium',
    rating: 4.7,
    reviews: 189
  },
  {
    id: '25',
    name: 'JBL Tune 660NC - Casque Pliable Réduction Bruit',
    price: 69.99,
    originalPrice: 99.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20660NC%20foldable%20noise%20cancelling%20headphones%2C%20practical%20design%20for%20travel%20and%20portability%2C%20modern%20audio%20equipment%20with%20professional%20product%20photography&width=400&height=400&seq=jbl660nc&orientation=squarish',
    category: 'JBL Voyage',
    rating: 4.5,
    reviews: 112
  },
  {
    id: '26',
    name: 'JBL Club One - Casque Hi-Res Premium',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Club%20One%20premium%20hi-res%20audio%20headphones%2C%20luxury%20design%20with%20high-end%20materials%2C%20professional%20audiophile%20equipment%20photography%20with%20sophisticated%20studio%20background&width=400&height=400&seq=jblclubone&orientation=squarish',
    category: 'JBL Audiophile',
    rating: 4.9,
    reviews: 87
  },
  {
    id: '27',
    name: 'JBL Quantum 100 - Casque Gaming Filaire',
    price: 24.99,
    originalPrice: 39.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Quantum%20100%20wired%20gaming%20headset%20with%20microphone%2C%20designed%20for%20gaming%20with%20comfortable%20padding%2C%20professional%20gaming%20equipment%20photography%20with%20clean%20background&width=400&height=400&seq=jblquantum100&orientation=squarish',
    category: 'JBL Gaming',
    rating: 4.3,
    reviews: 156
  },
  {
    id: '28',
    name: 'JBL Tune 750BTNC - Casque Over-Ear Premium',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20750BTNC%20over-ear%20wireless%20headphones%20with%20noise%20cancellation%2C%20comfortable%20design%20in%20elegant%20colors%2C%20premium%20audio%20equipment%20photography%20with%20professional%20lighting&width=400&height=400&seq=jbl750btnc&orientation=squarish',
    category: 'JBL Confort',
    rating: 4.6,
    reviews: 134
  },
  {
    id: '29',
    name: 'JBL Live 650BTNC - Casque Intelligent Voice',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Live%20650BTNC%20smart%20voice-enabled%20headphones%20with%20Google%20Assistant%20and%20Alexa%20support%2C%20modern%20wireless%20design%2C%20professional%20tech%20product%20photography&width=400&height=400&seq=jbllive650&orientation=squarish',
    category: 'JBL Smart',
    rating: 4.7,
    reviews: 98
  }
];

const categories = ['Tous', 'JBL Premium', 'JBL Essentiel', 'JBL Compact', 'JBL Voyage', 'JBL Audiophile', 'JBL Gaming', 'JBL Confort', 'JBL Smart'];

export default function CasquesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = headphoneProducts.filter(product => 
    selectedCategory === 'Tous' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-red-500">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20JBL%20headphones%20collection%20display%20with%20modern%20wireless%20and%20bluetooth%20audio%20equipment%2C%20professional%20electronics%20store%20showcase%20with%20clean%20organized%20layout%2C%20high-tech%20audio%20devices%20photography&width=1200&height=300&seq=headphonesbanner&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Casques Audio JBL
              </h1>
              <p className="text-xl">
                Son premium et technologie avancée - Collection complète JBL
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-headphone-fill text-4xl text-blue-600 mr-3"></i>
              <h2 className="text-2xl font-bold text-blue-800">Pourquoi choisir JBL ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <i className="ri-music-2-fill text-3xl text-blue-600 mb-2"></i>
                <h3 className="font-semibold text-blue-800">Son Légendaire</h3>
                <p className="text-blue-700">Qualité audio exceptionnelle depuis plus de 75 ans</p>
              </div>
              <div>
                <i className="ri-bluetooth-fill text-3xl text-blue-600 mb-2"></i>
                <h3 className="font-semibold text-blue-800">Technologie Avancée</h3>
                <p className="text-blue-700">Bluetooth, réduction de bruit, commandes vocales</p>
              </div>
              <div>
                <i className="ri-time-fill text-3xl text-blue-600 mb-2"></i>
                <h3 className="font-semibold text-blue-800">Autonomie Longue Durée</h3>
                <p className="text-blue-700">Jusqu'à 50h d'écoute selon les modèles</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Filtres</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Gammes JBL</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer \${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Trier par</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Produits vedettes</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="rating">Mieux notés</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {selectedCategory === 'Tous' ? 'Tous les casques JBL' : selectedCategory}
                </h2>
                <span className="text-gray-600">
                  {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <i className="ri-headphone-line text-6xl text-gray-300 mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Aucun produit trouvé
                  </h3>
                  <p className="text-gray-500">
                    Essayez de modifier vos filtres ou revenez plus tard.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}