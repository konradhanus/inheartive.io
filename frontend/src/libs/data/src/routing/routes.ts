import { Platform } from 'react-native';

const API_URL_PREFIX_IOS = process.env.API_URL_PREFIX_IOS;
const API_URL_PREFIX_ANDROID = process.env.API_URL_PREFIX_ANDROID;

const apiUrlPrefix =
    Platform.OS === 'android' ? API_URL_PREFIX_ANDROID : API_URL_PREFIX_IOS;

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
    loginSso: `${apiUrlPrefix}/login/sso`,
} as const;

export const routeWithId = (route: string, id: string) =>
    route.replace(':id', id);
