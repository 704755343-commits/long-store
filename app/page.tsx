import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headphones, CreditCard } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              海外社交媒体账号批发平台
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              专业提供 Twitter、Instagram、Telegram、Facebook 等海外账号，品质保证，价格优惠
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                浏览商品
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">品质保证</h3>
              <p className="text-gray-600 text-sm">所有账号真实可用</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">快速交付</h3>
              <p className="text-gray-600 text-sm">下单后即时交付</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">7x24 支持</h3>
              <p className="text-gray-600 text-sm">问题随时联系</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">安全支付</h3>
              <p className="text-gray-600 text-sm">多种支付方式</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">商品分类</h2>
            <p className="text-gray-600">选择您需要的账号类型</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.filter(c => c !== 'All').map((category) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-lg text-gray-800">{category}</h3>
                <p className="text-gray-500 text-sm mt-1">查看详情</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">热门商品</h2>
            <p className="text-gray-600">最受欢迎的账号产品</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              查看更多商品
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">需要批量采购？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            提供批量采购优惠，请联系 Telegram 客服
          </p>
          <a
            href="https://t.me/pfhaocom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            联系客服
          </a>
        </div>
      </section>
    </div>
  );
}
