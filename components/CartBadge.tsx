'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/CartContext';
import { useEffect, useState } from 'react';

export default function CartBadge() {
  const [cartCount, setCartCount] = useState(0);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    setCartCount(items.reduce((sum, item) => sum + item.quantity, 0));
  }, [items]);

  return (
    <Link
      href="/cart"
      className="relative p-2 text-gray-700 hover:text-blue-600"
    >
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
