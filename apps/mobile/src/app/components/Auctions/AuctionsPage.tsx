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

import { FooterMenu, IconNameType } from '@inheartive/ui/organisms';

export function AuctionsPage() {
  const [auctions, setAuctions] = useState<IAuction[]>([]);

  const [selectedCategoryID, setSelectedCategoryID] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [sortBy, setSortBy] = useState<SortKey>(SortKey.ExpirationDate);
  const [sortDir, setSortDir] = useState<SortDirection>(SortDirection.ASC);

  useEffect(() => {
    // TODO: Categories API call
    setCategories(categoriesMock);
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

  return (
    <>
      <AuctionsTemplate
        categories={categories}
        selectedCategoryID={selectedCategoryID}
        onCategoryChange={(id) => setSelectedCategoryID(id)}
        sortBy={sortBy}
        onSortByChange={(sortBy) => setSortBy(sortBy)}
        sortDir={sortDir}
        onSortDirChange={(sortDir) => setSortDir(sortDir)}
        auctions={auctions}
      />
      <FooterMenu
        activeIcon={'search'}
        onChange={function (iconName: IconNameType): void {
          console.log('Change to ' + iconName);
        }}
      />
    </>
  );
}

export default AuctionsPage;
