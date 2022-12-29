import { ICategory } from '../categories';
import { IUser } from '../user';

export interface IAuction {
  id: string;
  title: string;
  category: ICategory;
  author: IUser;
  heartcoins: number;
  imageSrc?: string;
  expirationDate: Date;
  creationDate: string;
}
