import { RoutingPath } from './routing-path';
import SignInPage from '../components/SignIn';
import AuctionsPage from '../components/Auctions';
import AuctionPage from '../components/Auction';
import AuctionCreatePage from '../components/AuctionCreate';
import CategoriesPage from '../components/Categories/CategoriesPage';
import RegisterPage from '../components/Register/RegisterPage';

import { FooterIcon } from '../libs/ui/organisms';
import MyAuctions from '../components/MyAuctions';
import { apiRoutes } from '../libs/data';

interface RouteConfig {
  path: RoutingPath;
  needsAuth: boolean;
  page: JSX.Element;
  footerIcon?: FooterIcon;
}

export const routesConfig: RouteConfig[] = [
  {
    path: RoutingPath.signIn,
    needsAuth: false,
    page: <SignInPage />,
  },
  {
    path: RoutingPath.register,
    needsAuth: false,
    page: <RegisterPage />,
  },
  {
    path: RoutingPath.auctions,
    needsAuth: true,
    page: <AuctionsPage />,
    footerIcon: FooterIcon.auctions,
  },
  {
    path: RoutingPath.auctionCreate,
    needsAuth: true,
    page: <AuctionCreatePage />,
    footerIcon: FooterIcon.addAuction,
  },
  {
    path: RoutingPath.auction,
    needsAuth: true,
    page: <AuctionPage />,
  },
  {
    path: RoutingPath.myAuctions,
    needsAuth: true,
    page: <MyAuctions url={apiRoutes.myAuctions} label={'My auctions'} />,
  },
  {
    path: RoutingPath.myBids,
    needsAuth: true,
    page: <MyAuctions url={apiRoutes.myBids} label="My bids" />,
  },
  {
    path: RoutingPath.categories,
    needsAuth: true,
    page: <CategoriesPage />,
  },
];
