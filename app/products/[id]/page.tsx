'use client';

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCartStore } from '@/store/CartContext';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">商品不存在</h1>
        <Link href="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          返回商品列表
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/products"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回列表
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">
              {product.category}
            </span>
            <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded">
              库存: {product.stock}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-blue-600">${product.price}</span>
            <span className="text-gray-500 ml-2">/ 个</span>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              购买数量
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {added ? (
              <span className="inline-flex items-center">
                <Check className="w-5 h-5 mr-2" />
                已加入购物车
              </span>
            ) : (
              <span className="inline-flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                加入购物车
              </span>
            )}
          </button>

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">商品特点</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
