import React, { useState } from 'react';
import AuctionsTemplate from './AuctionsTemplate';
import { apiRoutes, SortDirection, SortKey } from '@inheartive/data';
import { useQuery } from '@tanstack/react-query';
import { useFetchAutions } from './useFetchAutions';
import { ISelectItemProps } from '@inheartive/ui/atoms';

const INITIAL_SELECTED_CATEGORY: ISelectItemProps = {
  value: '',
  label: '',
};

export function AuctionsPage() {
  const [selectedCategory, setSelectedCategoryID] = useState<ISelectItemProps>(INITIAL_SELECTED_CATEGORY);

  const {
    isLoading: categoriesLoading,
    error: categoriesError,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
  });

  const [favoriteAuctionsIds, setFavoriteAuctionsIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>(SortKey.ExpiresAt);
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.ASC);
  const { isLoading: auctionsLoading, error: auctionsError, auctions = [] } = useFetchAutions(selectedCategory.value);

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
      selectedCategoryID={selectedCategory}
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
