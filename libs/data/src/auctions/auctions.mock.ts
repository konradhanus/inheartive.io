import { categoriesMock } from '../categories';
import { usersMock } from '../user';
import { IAuction } from './auction';

export const auctionsMock: IAuction[] = [
  {
    id: 'aaaa-1111',
    author: usersMock[0],
    title: 'Japanese lesson',
    category: categoriesMock[2],
    heartcoins: 26,
    expirationDate: '2022-12-01T16:00:00Z',
    creationDate: '2022-10-01T13:56:10Z',
  },
  {
    id: 'aaaa-1112',
    author: usersMock[1],
    title: 'Homemade beer',
    category: categoriesMock[1],
    heartcoins: 2047,
    expirationDate: '2022-12-02T22:00:00Z',
    creationDate: '2022-10-12T12:20:33Z',
  },
  {
    id: 'aaaa-1113',
    author: usersMock[2],
    title: 'Bro',
    category: categoriesMock[0],
    heartcoins: 333,
    expirationDate: '2022-12-02T22:00:00Z',
    creationDate: '2022-10-12T12:20:33Z',
  },
];
