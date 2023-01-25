import { RoutingPath } from './routing-path';
import SignInPage from '../components/SignIn';
import AuctionsPage from '../components/Auctions';
import AuctionPage from '../components/Auction';
import AuctionCreatePage from '../components/AuctionCreate';
import CategoriesPage from '../components/Categories/CategoriesPage';
import RegisterPage from '../components/Register/RegisterPage';

import { FooterIcon } from '@inheartive/ui/organisms';

interface RouteConfig {
  path: RoutingPath;
  needsAuth: boolean;
  page: JSX.Element;
  footerIcon?: FooterIcon;
}

export const routesConfig: RouteConfig[] = [
  {
    path: RoutingPath.signIn,
    needsAuth: true,
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
    path: RoutingPath.categories,
    needsAuth: true,
    page: <CategoriesPage />,
  },
];
