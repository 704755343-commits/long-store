import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Twitter 美国账号',
    category: 'Twitter',
    price: 15,
    description: '美国地区 Twitter 账号，带邮箱验证，资料完整，可改密码',
    features: ['美国IP注册', '邮箱验证', '资料完整', '可改密码', '新号无违规'],
    stock: 50,
    image: 'https://placehold.co/400x300/1DA1F2/white?text=Twitter'
  },
  {
    id: '2',
    name: 'Twitter 俄罗斯账号',
    category: 'Twitter',
    price: 12,
    description: '俄罗斯地区 Twitter 账号，带邮箱验证，长期可用',
    features: ['俄罗斯IP注册', '邮箱验证', '资料完整', '可改密码', '新号无违规'],
    stock: 30,
    image: 'https://placehold.co/400x300/1DA1F2/white?text=Twitter'
  },
  {
    id: '3',
    name: 'Instagram 美国账号',
    category: 'Instagram',
    price: 18,
    description: '美国地区 Instagram 账号，带邮箱验证，头像资料完整',
    features: ['美国IP注册', '邮箱验证', '头像资料完整', '可改密码', '新号无违规'],
    stock: 45,
    image: 'https://placehold.co/400x300/E4405F/white?text=Instagram'
  },
  {
    id: '4',
    name: 'Instagram 巴西账号',
    category: 'Instagram',
    price: 14,
    description: '巴西地区 Instagram 账号，长期稳定可用',
    features: ['巴西IP注册', '邮箱验证', '资料完整', '可改密码', '新号无违规'],
    stock: 25,
    image: 'https://placehold.co/400x300/E4405F/white?text=Instagram'
  },
  {
    id: '5',
    name: 'Telegram 美国账号',
    category: 'Telegram',
    price: 20,
    description: '美国地区 Telegram 账号，带+1手机号，可收发短信',
    features: ['美国号码', '可收发短信', '可改密码', '新号无违规', '可加群'],
    stock: 40,
    image: 'https://placehold.co/400x300/26A5E4/white?text=Telegram'
  },
  {
    id: '6',
    name: 'Telegram 俄罗斯账号',
    category: 'Telegram',
    price: 16,
    description: '俄罗斯地区 Telegram 账号，带+7手机号',
    features: ['俄罗斯号码', '可收发短信', '可改密码', '新号无违规', '可加群'],
    stock: 35,
    image: 'https://placehold.co/400x300/26A5E4/white?text=Telegram'
  },
  {
    id: '7',
    name: 'Facebook 美国账号',
    category: 'Facebook',
    price: 25,
    description: '美国地区 Facebook 账号，带邮箱验证，好友10+',
    features: ['美国IP注册', '邮箱验证', '好友10+', '可改密码', '新号无违规'],
    stock: 20,
    image: 'https://placehold.co/400x300/1877F2/white?text=Facebook'
  },
  {
    id: '8',
    name: 'YouTube 账号',
    category: 'YouTube',
    price: 30,
    description: 'YouTube 频道账号，订阅者100+，可迁移',
    features: ['订阅者100+', '可迁移频道', '邮箱绑定', '无版权 strikes', '新号无违规'],
    stock: 15,
    image: 'https://placehold.co/400x300/FF0000/white?text=YouTube'
  },
  {
    id: '9',
    name: 'WhatsApp 美国账号',
    category: 'WhatsApp',
    price: 22,
    description: '美国地区 WhatsApp 账号，带+1手机号',
    features: ['美国号码', '可收发消息', '可改密码', '新号无违规', '资料完整'],
    stock: 30,
    image: 'https://placehold.co/400x300/25D366/white?text=WhatsApp'
  },
  {
    id: '10',
    name: 'Gmail 企业邮箱',
    category: 'Gmail',
    price: 35,
    description: 'Gmail 企业邮箱账号，带恢复邮箱，可改密码',
    features: ['企业邮箱', '恢复邮箱', '可改密码', '新号无违规', '支持双开'],
    stock: 100,
    image: 'https://placehold.co/400x300/EA4335/white?text=Gmail'
  }
];

export const categories = ['All', 'Twitter', 'Instagram', 'Telegram', 'Facebook', 'YouTube', 'WhatsApp', 'Gmail'];
