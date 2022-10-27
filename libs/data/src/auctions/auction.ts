import { ICategory } from '../categories';
import { IUser } from '../user';

export interface IAuction {
  id: string;
  title: string;
  category: ICategory;
  author: IUser;
  expirationDate: string;
  heartcoins: number;
  creationDate: string;
}
