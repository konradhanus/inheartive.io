import { Category } from '../categories';
import { User } from '../user';

export interface Auction {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  author: User;
  price: number;
  imageSrc?: string;
  expiresAt: string;
  createdAt: string;
  upodatedAt: string;
}
