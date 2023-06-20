import { FooterIcon } from '../libs/ui/organisms';
import { RoutingPath } from './routing-path';

export const footerIconRouteMap = {
    [FooterIcon.auctions]: RoutingPath.auctions,
    [FooterIcon.search]: '',
    [FooterIcon.heartcoins]: '',
    [FooterIcon.addAuction]: RoutingPath.auctionCreate,
    [FooterIcon.favorites]: RoutingPath.auctions,
} as const;
