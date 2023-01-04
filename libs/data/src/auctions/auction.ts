import { ICategory } from '../categories';
import { IUser } from '../user';

export interface IAuction {
  id: string;
  title: string;
  description: string | null;
  category: ICategory;
  author: IUser;
  price: number;
  imageSrc?: string;
  expiresAt: string;
  createdAt: string;
  upodatedAt: string;
}
