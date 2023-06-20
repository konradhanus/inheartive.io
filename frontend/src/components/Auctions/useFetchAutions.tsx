import { apiRoutes, routeWithId, Auction } from '../../libs/data';
import { useQuery } from '@tanstack/react-query';

export const useFetchAutions = (selectedCategoryID: string) => {
    const route = selectedCategoryID
        ? routeWithId(apiRoutes.auctionsByCategory, selectedCategoryID)
        : apiRoutes.auctions;

    const {
        isLoading,
        error,
        data: auctions = [],
    } = useQuery<Auction[]>({
        queryKey: ['auctions', { route }],
        queryFn: () => fetch(route).then((res) => res.json()),
    });

    return { isLoading, error, auctions };
};
