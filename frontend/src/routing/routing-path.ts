export const RoutingPath = {
  signIn: '/sign-in',
  register: '/register',
  auctions: '/',
  auctionCreate: '/auctions/create',
  auction: '/auctions/:id',
  myAuctions: '/auctions/my',
  myBids: '/auctions/bids',
  categories: '/categories',
} as const;

export type RoutingPath = (typeof RoutingPath)[keyof typeof RoutingPath];
