export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  stock: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'processing' | 'completed';
  createdAt: Date;
}
