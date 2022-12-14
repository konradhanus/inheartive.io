/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useEffect, useState } from 'react';
import AuctionsTemplate from './AuctionsTemplate';
import {
  auctionsMock,
  categoriesMock,
  IAuction,
  ICategory,
  sortAuctions,
  SortDirection,
  SortKey,
} from '@inheartive/data';

import { IconNameType } from '@inheartive/ui/organisms';

export function AuctionsPage() {
  const [auctions, setAuctions] = useState<IAuction[]>([]);
  const [favoriteAuctionsIds, setFavoriteAuctionsIds] = useState<string[]>([]);

  const [selectedCategoryID, setSelectedCategoryID] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [sortBy, setSortBy] = useState<SortKey>(SortKey.ExpirationDate);
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.ASC);
  const [activeIcon, setActiveIcon] = useState<IconNameType>(IconNameType.search);

  useEffect(() => {
    // TODO: Categories API call
    setCategories(categoriesMock);
    setFavoriteAuctionsIds(auctionsMock.filter((a, index) => index % 2).map((a) => a.id));
  }, []);

  useEffect(() => {
    // TODO: Auctions API call
    let finalAuctions = [...auctionsMock];

    if (selectedCategoryID) {
      finalAuctions = finalAuctions.filter((auction) => auction.category.id === selectedCategoryID);
    }

    finalAuctions = sortAuctions(finalAuctions, sortBy, sortDir);
    setAuctions(finalAuctions);
  }, [sortBy, sortDir, selectedCategoryID]);

  const onFavoriteChange = (auctionId: string, isCurrentlyFavorite: boolean) => {
    const newFavouriteAuctionsIds = isCurrentlyFavorite
      ? favoriteAuctionsIds.filter((id) => id !== auctionId)
      : [...favoriteAuctionsIds, auctionId];

    setFavoriteAuctionsIds(newFavouriteAuctionsIds);
  };

  return (
    <AuctionsTemplate
      categories={categories}
      selectedCategoryID={selectedCategoryID}
      onCategoryChange={(id) => setSelectedCategoryID(id)}
      sortBy={sortBy}
      onSortByChange={(sortBy) => setSortBy(sortBy)}
      sortDir={sortDir}
      onSortDirChange={(sortDir) => setSortDir(sortDir)}
      auctions={auctions}
      activeIcon={activeIcon}
      favoriteAuctionsIds={favoriteAuctionsIds}
      onFavoriteChange={onFavoriteChange}
    />
  );
}

export default AuctionsPage;
