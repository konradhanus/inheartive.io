import React, { useEffect, useState } from 'react';
import AuctionsTemplate from './AuctionsTemplate';
import { apiRoutes, SortDirection, SortKey } from '@inheartive/data';
import { useQuery } from '@tanstack/react-query';

export function AuctionsPage() {
  const {
    isLoading: auctionsLoading,
    error: auctionsError,
    data: auctions,
  } = useQuery({
    queryKey: ['auctions'],
    queryFn: () => fetch(apiRoutes.auctions).then((res) => res.json()),
  });

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
  });

  const [favoriteAuctionsIds, setFavoriteAuctionsIds] = useState<string[]>([]);

  const [selectedCategoryID, setSelectedCategoryID] = useState<string>('');

  const [sortBy, setSortBy] = useState<SortKey>(SortKey.ExpiresAt);
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.ASC);

  useEffect(() => {
    if (auctions) {
      setFavoriteAuctionsIds(auctions.filter((a, index) => index % 2).map((a) => a.id));
    }
  }, [auctions]);

  // TODO implement filtering and sorting - backend request
  //   useEffect(() => {
  //     if (selectedCategoryID) {
  //       finalAuctions = finalAuctions.filter((auction) => auction.category.id === selectedCategoryID);
  //     }

  //     finalAuctions = sortAuctions(finalAuctions, sortBy, sortDir);
  //     setAuctions(finalAuctions);
  //   }, [sortBy, sortDir, selectedCategoryID]);

  // TODO implement favorites on backend
  const onFavoriteChange = (auctionId: string, isCurrentlyFavorite: boolean) => {
    const newFavouriteAuctionsIds = isCurrentlyFavorite
      ? favoriteAuctionsIds.filter((id) => id !== auctionId)
      : [...favoriteAuctionsIds, auctionId];

    setFavoriteAuctionsIds(newFavouriteAuctionsIds);
  };

  return (
    <AuctionsTemplate
      categories={categories}
      categoriesLoading={categoriesLoading}
      categoriesError={!!categoriesError}
      auctions={auctions}
      auctionsLoading={auctionsLoading}
      auctionsError={!!auctionsError}
      selectedCategoryID={selectedCategoryID}
      onCategoryChange={(id) => setSelectedCategoryID(id)}
      sortBy={sortBy}
      onSortByChange={(sortBy) => setSortBy(sortBy)}
      sortDir={sortDir}
      onSortDirChange={(sortDir) => setSortDir(sortDir)}
      favoriteAuctionsIds={favoriteAuctionsIds}
      onFavoriteChange={onFavoriteChange}
    />
  );
}

export default AuctionsPage;
