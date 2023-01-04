import { categoriesMock } from '../categories';
import { usersMock } from '../user';
import { IAuction } from './auction';

function inTwoHours() {
  const date = new Date();
  date.setHours(date.getHours() + 2);
  return date.toISOString();
}

function tomorrow() {
  const date = new Date();
  date.setHours(date.getHours() + 24);
  return date.toISOString();
}

function inOneWeek() {
  const date = new Date();
  date.setHours(date.getHours() + 24 * 7);
  return date.toISOString();
}

export const auctionsMock: IAuction[] = [
  {
    id: 'aaaa-1111',
    author: usersMock[0],
    title: 'Japanese lesson',
    description: 'Nice lesson',
    category: categoriesMock[2],
    price: 26,
    expiresAt: tomorrow(),
    createdAt: '2022-12-30T08:56:30.275Z',
    upodatedAt: '2022-12-30T08:56:30.275Z',
  },
  {
    id: 'aaaa-1112',
    author: usersMock[1],
    title: 'Homemade beer',
    description: 'I crafted it!',
    category: categoriesMock[1],
    price: 900,
    expiresAt: inTwoHours(),
    createdAt: '2022-12-28T08:56:30.275Z',
    upodatedAt: '2022-12-29T08:56:30.275Z',
  },
  {
    id: 'aaaa-1113',
    author: usersMock[2],
    title: 'Bro',
    description: 'Bro',
    category: categoriesMock[0],
    price: 333,
    expiresAt: inOneWeek(),
    createdAt: '2022-12-22T08:56:30.275Z',
    upodatedAt: '2022-12-23T08:56:30.275Z',
  },
];
