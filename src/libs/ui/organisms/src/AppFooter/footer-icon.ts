import { IconType } from '../../../atoms';

export const FooterIcon = {
    auctions: IconType.home,
    search: IconType.search,
    heartcoins: IconType.favorite,
    addAuction: IconType.plusCircle,
    favorites: IconType.star,
} as const;

export type FooterIcon = (typeof FooterIcon)[keyof typeof FooterIcon];

export interface FooterIconRoutingMap {
    [FooterIcon.addAuction]: string;
    [FooterIcon.auctions]: string;
    [FooterIcon.favorites]: string;
    [FooterIcon.heartcoins]: string;
    [FooterIcon.search]: string;
}
