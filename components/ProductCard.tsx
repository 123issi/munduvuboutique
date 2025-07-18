'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gray-100 relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 \${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <i className="ri-image-line text-gray-400 text-4xl"></i>
            </div>
          )}
        </div>
        
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{discountPercentage}%
          </div>
        )}
        
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer \${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <i className={`\${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-lg`}></i>
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`\${i < Math.floor(product.rating) ? 'ri-star-fill' : 'ri-star-line'} text-sm`}
              ></i>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-600">
              {product.price.toFixed(2)}€
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toFixed(2)}€
              </span>
            )}
          </div>
          
          <Link
            href={`/produit/\${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            Voir
          </Link>
        </div>
      </div>
    </div>
  );
}