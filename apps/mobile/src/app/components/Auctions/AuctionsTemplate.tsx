/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { IAuction, ICategory, SortDirection, SortKey } from '@inheartive/data';
import { Text, View } from '@inheartive/ui/atoms';
import { AuctionsList, FilteringArea } from '@inheartive/ui/organisms';
import { Link } from 'react-router-native';

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
      <View mb={5}>
        <Link to='/sign-in'>
          <Text>Sign in</Text>
        </Link>
      </View>

      <FilteringArea
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
