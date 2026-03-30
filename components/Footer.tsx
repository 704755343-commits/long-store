import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PFHAO</h3>
            <p className="text-gray-400">
              专业海外社交媒体账号批发平台，提供 Twitter、Instagram、Telegram、Facebook 等账号
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MessageCircle className="w-5 h-5" />
                <span>Telegram: @pfhaocom</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>support@pfhao.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+86 xxx-xxxx-xxxx</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">工作时间</h3>
            <div className="text-gray-400">
              <p>周一至周五: 9:00 - 22:00</p>
              <p>周六至周日: 10:00 - 20:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PFHAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
