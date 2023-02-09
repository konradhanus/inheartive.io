import { useQuery } from '@tanstack/react-query';
import { apiRoutes, routeWithId } from '../../../../../../libs/data/src';

export const useFetchAutions = (selectedCategoryID: string) => {
  const route = selectedCategoryID ? routeWithId(apiRoutes.auctionsByCategory, selectedCategoryID) : apiRoutes.auctions;

  const {
    isLoading,
    error,
    data: auctions,
  } = useQuery({
    queryKey: ['auctions'],
    queryFn: () => fetch(route).then((res) => res.json()),
  });

  console.log({ route });
  console.log({ auctions });
  return { isLoading, error, auctions };
};
