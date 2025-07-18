'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const featuredProducts = [
  {
    id: '1',
    name: 'JBL Tune 770NC - Casque Bluetooth avec Réduction de Bruit',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20770NC%20wireless%20bluetooth%20headphones%20with%20noise%20cancellation%2C%20modern%20sleek%20black%20design%2C%20professional%20product%20photography%20with%20clean%20white%20background%2C%20high%20quality%20detailed%20image%20showcasing%20premium%20audio%20equipment&width=400&height=400&seq=jbl770&orientation=squarish',
    category: 'Casques Audio',
    rating: 4.5,
    reviews: 234
  },
  {
    id: '2',
    name: 'Robe d\'été Fleurie - Style Tropical Réunionnais',
    price: 24.99,
    originalPrice: 39.99,
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20tropical%20floral%20dress%20perfect%20for%20summer%2C%20vibrant%20colors%20with%20island-inspired%20patterns%2C%20elegant%20feminine%20style%2C%20professional%20fashion%20photography%20with%20clean%20simple%20background%2C%20high%20quality%20clothing%20product%20image&width=400&height=400&seq=dress1&orientation=squarish',
    category: 'Vêtements Femme',
    rating: 4.8,
    reviews: 156
  },
  {
    id: '3',
    name: 'Baskets Sport Enfant - Confortables et Colorées',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://readdy.ai/api/search-image?query=Colorful%20comfortable%20children%20sports%20sneakers%2C%20bright%20fun%20colors%20perfect%20for%20kids%2C%20modern%20athletic%20shoe%20design%2C%20professional%20product%20photography%20with%20clean%20white%20background%2C%20high%20quality%20footwear%20image&width=400&height=400&seq=kidshoes1&orientation=squarish',
    category: 'Enfants',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'JBL Tune 520BT - Casque Sans Fil Léger',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://readdy.ai/api/search-image?query=JBL%20Tune%20520BT%20wireless%20bluetooth%20headphones%2C%20lightweight%20modern%20design%20in%20vibrant%20colors%2C%20premium%20audio%20equipment%2C%20professional%20product%20photography%20with%20clean%20background%2C%20detailed%20high%20quality%20image&width=400&height=400&seq=jbl520&orientation=squarish',
    category: 'Casques Audio',
    rating: 4.4,
    reviews: 178
  },
  {
    id: '5',
    name: 'Sandales Homme - Style Décontracté Plage',
    price: 15.99,
    originalPrice: 25.99,
    image: 'https://readdy.ai/api/search-image?query=Comfortable%20mens%20beach%20sandals%2C%20casual%20summer%20footwear%20perfect%20for%20tropical%20climate%2C%20modern%20relaxed%20style%2C%20professional%20product%20photography%20with%20clean%20simple%20background%2C%20high%20quality%20shoe%20image&width=400&height=400&seq=sandals1&orientation=squarish',
    category: 'Chaussures Homme',
    rating: 4.3,
    reviews: 92
  },
  {
    id: '6',
    name: 'T-shirt Enfant Coloré - Motifs Tropicaux',
    price: 9.99,
    originalPrice: 16.99,
    image: 'https://readdy.ai/api/search-image?query=Colorful%20childrens%20t-shirt%20with%20tropical%20patterns%2C%20fun%20bright%20designs%20perfect%20for%20kids%2C%20comfortable%20cotton%20fabric%2C%20professional%20clothing%20photography%20with%20clean%20background%2C%20high%20quality%20apparel%20image&width=400&height=400&seq=kidstshirt1&orientation=squarish',
    category: 'Enfants',
    rating: 4.6,
    reviews: 67
  }
];

const categories = [
  {
    name: 'Vêtements',
    icon: 'ri-shirt-line',
    href: '/vetements',
    image: 'https://readdy.ai/api/search-image?query=Modern%20stylish%20clothing%20collection%20with%20tropical%20island%20fashion%2C%20colorful%20garments%20including%20dresses%20shirts%20and%20casual%20wear%2C%20vibrant%20fashion%20photography%20with%20clean%20organized%20display%2C%20high%20quality%20apparel%20showcase&width=300&height=200&seq=clothes&orientation=landscape'
  },
  {
    name: 'Chaussures',
    icon: 'ri-footprint-line',
    href: '/chaussures',
    image: 'https://readdy.ai/api/search-image?query=Diverse%20collection%20of%20shoes%20including%20sneakers%20sandals%20and%20casual%20footwear%2C%20modern%20stylish%20designs%20for%20tropical%20climate%2C%20professional%20product%20photography%20with%20clean%20organized%20display%2C%20high%20quality%20footwear%20showcase&width=300&height=200&seq=shoes&orientation=landscape'
  },
  {
    name: 'Casques Audio',
    icon: 'ri-headphone-line',
    href: '/casques',
    image: 'https://readdy.ai/api/search-image?query=Premium%20audio%20headphones%20collection%20including%20JBL%20wireless%20and%20bluetooth%20models%2C%20modern%20technology%20accessories%2C%20professional%20electronics%20photography%20with%20clean%20sophisticated%20background%2C%20high%20quality%20tech%20product%20display&width=300&height=200&seq=headphones&orientation=landscape'
  },
  {
    name: 'Mode Enfant',
    icon: 'ri-bear-smile-line',
    href: '/enfants',
    image: 'https://readdy.ai/api/search-image?query=Colorful%20childrens%20clothing%20and%20accessories%20collection%2C%20fun%20bright%20kids%20fashion%20including%20clothes%20shoes%20and%20toys%2C%20playful%20organized%20display%2C%20professional%20photography%20with%20clean%20cheerful%20background&width=300&height=200&seq=kids&orientation=landscape'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20tropical%20Reunion%20island%20shopping%20experience%20with%20vibrant%20colorful%20marketplace%2C%20modern%20e-commerce%20lifestyle%20with%20clothing%20shoes%20and%20electronics%2C%20bright%20cheerful%20atmosphere%20with%20blue%20white%20red%20color%20scheme%2C%20professional%20lifestyle%20photography&width=1200&height=500&seq=hero1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Munduvu à petit prix
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-2 font-pacifico">
                "Mi vann tout kalité, pa ser!"
              </p>
              <p className="text-lg text-white mb-8">
                Vêtements, chaussures, casques audio JBL et mode enfant à prix imbattables. 
                Livraison gratuite à La Réunion !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/vetements"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Découvrir nos vêtements
                </Link>
                <Link 
                  href="/casques"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  Voir les casques JBL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Catégories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <i className={`${category.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Produits en Vedette
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez nos meilleures offres du moment
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/vetements"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Livraison Gratuite à La Réunion
          </h2>
          <p className="text-xl mb-8">
            Profitez de la livraison gratuite sur toutes vos commandes. 
            Commandez maintenant et recevez vos produits directement chez vous !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/262693639938"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-fill mr-2"></i>
              Commander sur WhatsApp
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2"></i>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}