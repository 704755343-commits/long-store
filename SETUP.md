# PFHAO 商店 - 后台管理系统设置指南

## 🚀 快速开始

### 1. 创建 Supabase 项目

1. 访问 https://supabase.com
2. 点击 "New Project" 创建新项目
3. 填写项目名称（如：long-store）
4. 选择区域（推荐 Singapore 或其他）
5. 设置数据库密码（记住这个密码！）
6. 点击 "Create new project"

### 2. 获取 API 密钥

1. 进入项目后，点击左侧菜单的 "Settings"
2. 点击 "API"
3. 复制以下两个值：
   - `Project URL` - 这是你的 Supabase URL
   - `anon public` - 这是你的 Supabase Anon Key

### 3. 配置环境变量

1. 在项目根目录创建 `.env.local` 文件
2. 添加以下内容（替换为你的值）：

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. 创建数据库表

1. 在 Supabase 控制台，点击左侧菜单的 "SQL Editor"
2. 点击 "New query"
3. 粘贴以下 SQL 代码并运行：

```sql
-- 创建商品表
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  stock INTEGER DEFAULT 0,
  image TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建订单表
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer TEXT NOT NULL,
  items JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  telegram TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 插入示例商品
INSERT INTO products (name, category, price, description, features, stock, image, status) VALUES
('Twitter 美国账号', 'Twitter', 15.00, '美国地区 Twitter 账号，带邮箱验证，资料完整，可改密码', 
 ARRAY['美国IP注册', '邮箱验证', '资料完整', '可改密码', '新号无违规'], 
 50, 'https://placehold.co/400x300/1DA1F2/white?text=Twitter', 'active'),
('Twitter 俄罗斯账号', 'Twitter', 12.00, '俄罗斯地区 Twitter 账号，带邮箱验证，长期可用', 
 ARRAY['俄罗斯IP注册', '邮箱验证', '资料完整', '可改密码', '新号无违规'], 
 30, 'https://placehold.co/400x300/1DA1F2/white?text=Twitter', 'active'),
('Instagram 美国账号', 'Instagram', 18.00, '美国地区 Instagram 账号，带邮箱验证，头像资料完整', 
 ARRAY['美国IP注册', '邮箱验证', '头像资料完整', '可改密码', '新号无违规'], 
 45, 'https://placehold.co/400x300/E4405F/white?text=Instagram', 'active'),
('Telegram 美国账号', 'Telegram', 20.00, '美国地区 Telegram 账号，带+1手机号，可收发短信', 
 ARRAY['美国号码', '可收发短信', '可改密码', '新号无违规', '可加群'], 
 40, 'https://placehold.co/400x300/26A5E4/white?text=Telegram', 'active'),
('WhatsApp 美国账号', 'WhatsApp', 22.00, '美国地区 WhatsApp 账号，带+1手机号', 
 ARRAY['美国号码', '可收发消息', '可改密码', '新号无违规', '资料完整'], 
 30, 'https://placehold.co/400x300/25D366/white?text=WhatsApp', 'active');

-- 插入示例订单
INSERT INTO orders (customer, items, total, status, telegram) VALUES
('user@example.com', 
 '[{"name": "Twitter 美国账号", "quantity": 2, "price": 15}]', 
 30.00, 'pending', '@user123'),
('customer@test.com', 
 '[{"name": "Instagram 美国账号", "quantity": 1, "price": 18}]', 
 18.00, 'processing', '@customer456');
```

### 5. 启动项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 6. 访问管理后台

- 前台商店: http://localhost:3000
- 后台管理: http://localhost:3000/admin

## 📝 项目结构

```
long-store/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # 首页
│   │   ├── products/                # 商品页面
│   │   ├── cart/                    # 购物车
│   │   ├── user/                    # 用户页面
│   │   ├── about/                   # 关于页面
│   │   ├── admin/                   # 后台管理
│   │   │   ├── page.tsx             # 控制台
│   │   │   ├── products/            # 商品管理
│   │   │   └── orders/              # 订单管理
│   │   └── api/                     # API 路由
│   │       ├── products/            # 商品 API
│   │       └── orders/              # 订单 API
│   ├── components/                  # 组件
│   ├── data/                        # 数据文件
│   └── lib/                         # 工具库
│       └── supabase.ts              # Supabase 配置
└── .env.example                     # 环境变量示例
```

## 🔧 功能说明

### 前台功能
- 商品列表和详情
- 商品分类筛选
- 购物车功能
- 用户登录/注册（前端界面）

### 后台功能
- 控制台概览
- 商品管理（增删改查）
- 订单管理（查看和处理）
- 状态管理（上架/下架）

## 🚀 部署

### Vercel 部署
```bash
# 部署到 Vercel
npx vercel --prod --yes
```

### 环境变量配置
在 Vercel 控制台添加环境变量：
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

## 📞 支持

如有问题，请联系：
- Telegram: @pfhaocom
- Email: support@pfhao.com
