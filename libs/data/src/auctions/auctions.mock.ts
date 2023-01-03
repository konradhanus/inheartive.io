import { categoriesMock } from '../categories';
import { usersMock } from '../user';
import { IAuction } from './auction';

export const auctionsMock: IAuction[] = [
  {
    id: 'aaaa-1111',
    author: usersMock[0],
    title: 'Japanese lesson',
    category: categoriesMock[2],
    price: 26,
    expiresAt: '2022-12-01T16:00:00Z',
    createdAt: '2022-12-30T08:56:30.275Z',
    upodatedAt: '2022-12-30T08:56:30.275Z',
  },
  {
    id: 'aaaa-1112',
    author: usersMock[1],
    title: 'Homemade beer',
    category: categoriesMock[1],
    price: 900,
    expiresAt: '2022-12-02T22:00:00Z',
    createdAt: '2022-12-28T08:56:30.275Z',
    upodatedAt: '2022-12-29T08:56:30.275Z',
  },
  {
    id: 'aaaa-1113',
    author: usersMock[2],
    title: 'Bro',
    category: categoriesMock[0],
    price: 333,
    expiresAt: '2022-12-02T22:00:00Z',
    createdAt: '2022-12-22T08:56:30.275Z',
    upodatedAt: '2022-12-23T08:56:30.275Z',
  },
];
