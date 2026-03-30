'use client';

import { useCartStore } from '@/store/CartContext';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">购物车为空</h1>
        <p className="text-gray-500 mb-8">快去挑选心仪的商品吧</p>
        <Link
          href="/products"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          浏览商品
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">购物车</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                <div className="col-span-5">商品</div>
                <div className="col-span-2 text-center">单价</div>
                <div className="col-span-3 text-center">数量</div>
                <div className="col-span-2 text-right">小计</div>
              </div>
            </div>

            {items.map((item) => (
              <div key={item.product.id} className="p-6 border-b">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <Link
                        href={`/products/${item.product.id}`}
                        className="font-medium text-gray-900 hover:text-blue-600"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500">{item.product.category}</p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">${item.product.price}</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="mx-3 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="col-span-2 text-right flex items-center justify-end gap-3">
                    <span className="font-bold">${item.product.price * item.quantity}</span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                清空购物车
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">订单摘要</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>商品数量</span>
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>小计</span>
                <span>${total}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>总计</span>
                <span className="text-blue-600">${total}</span>
              </div>
            </div>

            <a
              href="https://t.me/pfhaocom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              联系客服下单
            </a>

            <p className="text-xs text-gray-500 mt-4 text-center">
              点击上方按钮联系 Telegram 客服完成购买
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
