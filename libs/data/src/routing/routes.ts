import { Platform } from 'react-native';

// TODO move to env
const apiUrlPrefix = Platform.OS === 'android' ? 'http://10.0.2.2:3333/api' : 'http://localhost:3333/api';

export const apiRoutes = {
  auctions: `${apiUrlPrefix}/auctions`,
  auctionsByCategory: `${apiUrlPrefix}/auctions/category/:id`,
  auction: `${apiUrlPrefix}/auctions/:id`,
  myAuctions: `${apiUrlPrefix}/auctions/my/:id`,
  categories: `${apiUrlPrefix}/categories`,
  users: `${apiUrlPrefix}/users`,
  login: `${apiUrlPrefix}/login`,
} as const;

export const routeWithId = (route: string, id: string) => route.replace(':id', id);
