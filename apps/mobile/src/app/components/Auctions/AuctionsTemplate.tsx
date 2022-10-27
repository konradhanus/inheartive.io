import React from 'react';
import { View } from '@inheartive/ui/atoms';
import { IAuction, ICategory, SortDirection, SortKey } from '@inheartive/data';
import { AuctionsList, FilterBar } from '@inheartive/ui/organisms';

interface Props {
  categories: ICategory[];
  selectedCategoryID: string;
  onCategoryChange: (id: string) => void;
  sortBy: SortKey;
  onSortByChange: (sortBy: SortKey) => void;
  sortDir: SortDirection;
  onSortDirChange: (sortDir: SortDirection) => void;
  auctions: IAuction[];
}

export function AuctionsTemplate(props: Props) {
  const {
    auctions,
    categories,
    selectedCategoryID,
    onCategoryChange,
    sortBy,
    onSortByChange,
    sortDir,
    onSortDirChange,
  } = props;

  return (
    <View mt={100} px={10}>
      <FilterBar
        categories={categories}
        selectedCategoryID={selectedCategoryID}
        onCategoryChange={onCategoryChange}
        sortBy={sortBy}
        onSortByChange={onSortByChange}
        sortDir={sortDir}
        onSortDirChange={onSortDirChange}
      />

      <AuctionsList auctions={auctions} />
    </View>
  );
}

export default AuctionsTemplate;
