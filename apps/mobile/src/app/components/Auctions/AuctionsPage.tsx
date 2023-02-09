import React, { useEffect, useState } from 'react';
import AuctionsTemplate from './AuctionsTemplate';
import { apiRoutes, Auction, sortAuctions, SortDirection, SortKey } from '@inheartive/data';
import { useQuery } from '@tanstack/react-query';
import { useFetchAutions } from './useFetchAutions';

export function AuctionsPage() {
  const [selectedCategoryID, setSelectedCategoryID] = useState<string>('');

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
  });

  const [favoriteAuctionsIds, setFavoriteAuctionsIds] = useState<string[]>([]);
  const [finalAuctions, setFinalAuctions] = useState<Auction[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>(SortKey.ExpiresAt);
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.ASC);
  const { isLoading: auctionsLoading, error: auctionsError, auctions = [] } = useFetchAutions(selectedCategoryID);

  if (auctions) {
    setFinalAuctions(auctions);
    setFavoriteAuctionsIds(
      finalAuctions.filter((auction: Auction, index: number) => index % 2).map((auction: { id: string }) => auction.id)
    );
    setFinalAuctions(sortAuctions(finalAuctions, sortBy, sortDir));
  }

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
      auctions={finalAuctions}
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
