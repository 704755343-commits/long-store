'use client';

import React, { createContext, useContext, useState, useEffect, useSyncExternalStore, ReactNode } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getLocalStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('pfhao-cart');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse cart', e);
    }
  }
  return [];
}

function subscribe(callback: () => void) {
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', callback);
    window.addEventListener('cart-update', callback);
  }
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', callback);
      window.removeEventListener('cart-update', callback);
    }
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setItems(getLocalStorage());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('pfhao-cart', JSON.stringify(items));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('cart-update'));
      }
    }
  }, [items, isHydrated]);

  const addItem = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const getTotal = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const value = {
    items: useSyncExternalStore(
      subscribe,
      () => items,
      () => []
    ),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

type Selector<T> = (state: CartContextType) => T;

export function useCartStore<T>(selector: Selector<T>): T {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartStore must be used within CartProvider');
  }
  return selector(context);
}
