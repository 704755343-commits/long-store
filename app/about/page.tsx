import { MessageCircle, Mail, Clock, Shield, Truck, RefreshCw } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          PFHAO 是专业的海外社交媒体账号批发平台，为您提供高品质的 Twitter、Instagram、Telegram 等账号
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的服务</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">品质保证</h3>
                <p className="text-gray-600">所有账号经过严格测试，确保真实可用</p>
              </div>
            </li>
            <li className="flex items-start">
              <Truck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">快速交付</h3>
                <p className="text-gray-600">下单后即时交付，无需等待</p>
              </div>
            </li>
            <li className="flex items-start">
              <RefreshCw className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">售后保障</h3>
                <p className="text-gray-600">7天内质量问题免费更换</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">联系方式</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Telegram</h3>
                <a
                  href="https://t.me/pfhaocom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @pfhaocom
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">邮箱</h3>
                <a
                  href="mailto:support@pfhao.com"
                  className="text-blue-600 hover:underline"
                >
                  support@pfhao.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">工作时间</h3>
                <p className="text-gray-600">周一至周五: 9:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">账号是否安全？</h3>
            <p className="text-gray-600">
              是的，我们提供的所有账号均为真实注册，长期稳定可用，支持改密码等操作。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">如何购买？</h3>
            <p className="text-gray-600">
              浏览商品后加入购物车，然后联系 Telegram 客服完成支付和交付。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">有售后吗？</h3>
            <p className="text-gray-600">
              我们提供7天质量保障，如遇账号问题可联系客服更换。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">支持批量采购吗？</h3>
            <p className="text-gray-600">
              支持批量采购，量大优惠，请联系 Telegram 客服详谈。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
