'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CartBadge = dynamic(() => import('./CartBadge'), { ssr: false });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              PFHAO
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              首页
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              商品列表
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              关于我们
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <CartBadge />
            <Link
              href="/user"
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              <User className="w-6 h-6" />
            </Link>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                商品列表
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                关于我们
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
