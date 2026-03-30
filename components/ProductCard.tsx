'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
              库存: {product.stock}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>购买</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
