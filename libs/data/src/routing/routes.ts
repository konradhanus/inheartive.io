import { Platform } from 'react-native';
import { API_URL_PREFIX_IOS, API_URL_PREFIX_ANDROID } from '@env';

const apiUrlPrefix = Platform.OS === 'android' ? API_URL_PREFIX_ANDROID : API_URL_PREFIX_IOS;

export const apiRoutes = {
  auctions: `${apiUrlPrefix}/auctions`,
  auctionsByCategory: `${apiUrlPrefix}/auctions?categoryId=:id`,
  auction: `${apiUrlPrefix}/auctions/:id`,
  myAuctions: `${apiUrlPrefix}/auctions?authorId=:id`,
  myBids: `${apiUrlPrefix}/auctions?bidAuthorId=:id`,
  bids: `${apiUrlPrefix}/bids`,
  categories: `${apiUrlPrefix}/categories`,
  users: `${apiUrlPrefix}/users`,
  login: `${apiUrlPrefix}/login`,
} as const;

export const routeWithId = (route: string, id: string) => route.replace(':id', id);
