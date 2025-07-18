'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { useState } from 'react';

const clothingProducts = [
  {
    id: '11',
    name: 'Robe Maxi Fleurie - Style Tropical',
    price: 29.99,
    originalPrice: 45.99,
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20tropical%20maxi%20dress%20with%20vibrant%20floral%20patterns%2C%20flowing%20elegant%20design%20perfect%20for%20island%20lifestyle%2C%20professional%20fashion%20photography%20with%20clean%20white%20background%2C%20high%20quality%20womens%20clothing%20product%20image&width=400&height=400&seq=dress11&orientation=squarish',
    category: 'Robes',
    rating: 4.8,
    reviews: 143
  },
  {
    id: '12',
    name: 'Chemise Homme Lin - Fraîche et Confortable',
    price: 22.99,
    originalPrice: 35.99,
    image: 'https://readdy.ai/api/search-image?query=Comfortable%20mens%20linen%20shirt%20perfect%20for%20tropical%20climate%2C%20light%20breathable%20fabric%20in%20neutral%20colors%2C%20casual%20elegant%20style%2C%20professional%20clothing%20photography%20with%20clean%20background%2C%20high%20quality%20menswear%20image&width=400&height=400&seq=shirt12&orientation=squarish',
    category: 'Chemises',
    rating: 4.6,
    reviews: 98
  },
  {
    id: '13',
    name: 'Jean Femme Slim - Coupe Moderne',
    price: 34.99,
    originalPrice: 52.99,
    image: 'https://readdy.ai/api/search-image?query=Modern%20womens%20slim%20fit%20jeans%20in%20classic%20blue%20denim%2C%20contemporary%20cut%20and%20style%2C%20comfortable%20fashion%20for%20everyday%20wear%2C%20professional%20clothing%20photography%20with%20clean%20simple%20background%2C%20high%20quality%20denim%20product&width=400&height=400&seq=jeans13&orientation=squarish',
    category: 'Pantalons',
    rating: 4.7,
    reviews: 189
  },
  {
    id: '14',
    name: 'T-shirt Femme Coloré - Motifs Créoles',
    price: 14.99,
    originalPrice: 22.99,
    image: 'https://readdy.ai/api/search-image?query=Colorful%20womens%20t-shirt%20with%20Creole-inspired%20patterns%20and%20tropical%20designs%2C%20vibrant%20colors%20celebrating%20island%20culture%2C%20comfortable%20cotton%20fabric%2C%20professional%20apparel%20photography%20with%20clean%20background&width=400&height=400&seq=tshirt14&orientation=squarish',
    category: 'T-shirts',
    rating: 4.5,
    reviews: 76
  },
  {
    id: '15',
    name: 'Short Homme Cargo - Style Décontracté',
    price: 18.99,
    originalPrice: 28.99,
    image: 'https://readdy.ai/api/search-image?query=Casual%20mens%20cargo%20shorts%20perfect%20for%20warm%20weather%2C%20practical%20design%20with%20multiple%20pockets%2C%20comfortable%20fit%20for%20active%20lifestyle%2C%20professional%20menswear%20photography%20with%20clean%20simple%20background&width=400&height=400&seq=shorts15&orientation=squarish',
    category: 'Shorts',
    rating: 4.4,
    reviews: 112
  },
  {
    id: '16',
    name: 'Blouse Femme Élégante - Soirée Tropicale',
    price: 26.99,
    originalPrice: 39.99,
    image: 'https://readdy.ai/api/search-image?query=Elegant%20womens%20blouse%20perfect%20for%20tropical%20evening%20occasions%2C%20sophisticated%20design%20with%20flowing%20fabric%2C%20professional%20fashion%20photography%20with%20clean%20background%2C%20high%20quality%20formal%20wear%20image&width=400&height=400&seq=blouse16&orientation=squarish',
    category: 'Blouses',
    rating: 4.9,
    reviews: 67
  },
  {
    id: '17',
    name: 'Polo Homme Coton - Classique et Confortable',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://readdy.ai/api/search-image?query=Classic%20mens%20cotton%20polo%20shirt%20in%20solid%20colors%2C%20comfortable%20fit%20perfect%20for%20casual%20and%20semi-formal%20occasions%2C%20quality%20fabric%20and%20construction%2C%20professional%20menswear%20photography%20with%20clean%20background&width=400&height=400&seq=polo17&orientation=squarish',
    category: 'Polos',
    rating: 4.6,
    reviews: 134
  },
  {
    id: '18',
    name: 'Jupe Midi Femme - Style Bohème',
    price: 21.99,
    originalPrice: 33.99,
    image: 'https://readdy.ai/api/search-image?query=Bohemian%20style%20womens%20midi%20skirt%20with%20flowing%20design%20and%20artistic%20patterns%2C%20comfortable%20fabric%20perfect%20for%20island%20lifestyle%2C%20professional%20fashion%20photography%20with%20clean%20simple%20background&width=400&height=400&seq=skirt18&orientation=squarish',
    category: 'Jupes',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '19',
    name: 'Débardeur Homme Sport - Performance',
    price: 12.99,
    originalPrice: 19.99,
    image: 'https://readdy.ai/api/search-image?query=Athletic%20mens%20tank%20top%20for%20sports%20and%20fitness%2C%20moisture-wicking%20performance%20fabric%2C%20modern%20design%20for%20active%20lifestyle%2C%20professional%20sportswear%20photography%20with%20clean%20background&width=400&height=400&seq=tank19&orientation=squarish',
    category: 'Débardeurs',
    rating: 4.3,
    reviews: 156
  }
];

const categories = ['Tous', 'Robes', 'Chemises', 'Pantalons', 'T-shirts', 'Shorts', 'Blouses', 'Polos', 'Jupes', 'Débardeurs'];

export default function VetementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = clothingProducts.filter(product => 
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20fashion%20clothing%20store%20display%20with%20colorful%20garments%2C%20tropical%20island%20style%20clothing%20collection%20including%20dresses%20shirts%20and%20casual%20wear%2C%20bright%20organized%20retail%20environment%2C%20professional%20fashion%20photography&width=1200&height=300&seq=clothingbanner&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Vêtements
              </h1>
              <p className="text-xl">
                Mode tropicale à prix imbattables - Découvrez notre collection complète
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Filtres</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Catégories</h4>
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
                  {selectedCategory === 'Tous' ? 'Tous les vêtements' : selectedCategory}
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
                  <i className="ri-shirt-line text-6xl text-gray-300 mb-4"></i>
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