/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { IAuction, ICategory, SortDirection, SortKey } from '@inheartive/data';
import { Text, View } from '@inheartive/ui/atoms';
import { AuctionsList, FilteringArea } from '@inheartive/ui/organisms';
import { RoutingPath } from '../../routing';

interface Props {
  auctions: IAuction[];
  auctionsLoading: boolean;
  auctionsError: boolean;
  categories: ICategory[];
  categoriesLoading: boolean;
  categoriesError: boolean;
  selectedCategoryID: string;
  onCategoryChange: (id: string) => void;
  sortBy: SortKey;
  onSortByChange: (sortBy: SortKey) => void;
  sortDir: SortDirection;
  onSortDirChange: (sortDir: SortDirection) => void;
  favoriteAuctionsIds: string[];
  onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

export function AuctionsTemplate(props: Props) {
  const {
    auctions,
    auctionsLoading,
    auctionsError,
    categories,
    categoriesLoading,
    categoriesError,
    selectedCategoryID,
    onCategoryChange,
    sortBy,
    onSortByChange,
    sortDir,
    onSortDirChange,
    favoriteAuctionsIds,
    onFavoriteChange,
  } = props;

  return (
    <View>
      {categoriesError && <Text>Error while loading categories</Text>}

      {!categoriesLoading && !categoriesError && (
        <FilteringArea
          categories={categories}
          selectedCategoryID={selectedCategoryID}
          onCategoryChange={onCategoryChange}
          sortBy={sortBy}
          onSortByChange={onSortByChange}
          sortDir={sortDir}
          onSortDirChange={onSortDirChange}
        />
      )}

      {auctionsError && <Text>Error while loading auctions</Text>}

      {!auctionsLoading && !auctionsError && (
        <AuctionsList
          auctions={auctions}
          favoriteAuctionsIds={favoriteAuctionsIds}
          onFavoriteChange={onFavoriteChange}
          linkPatternWithId={RoutingPath.auction}
        />
      )}
    </View>
  );
}

export default AuctionsTemplate;
