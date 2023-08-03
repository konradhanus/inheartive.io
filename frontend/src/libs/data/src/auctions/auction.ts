import { Category } from '../categories';
import { User } from '../user';

export interface Bid {
  id: string;
  createdAt: string;
  value: number;
  user: User;
}
export interface Auction {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  author: User;
  location?: string;
  price: number;
  imageSrc?: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  bids: Bid[];
}
