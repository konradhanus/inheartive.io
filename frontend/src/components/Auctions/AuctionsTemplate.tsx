import React from 'react';
import { Auction, Category, SortDirection, SortKey } from '../../libs/data';
import { ISelectItemProps, Text, View } from '../../libs/ui/atoms';
import { AuctionsList, FilteringArea } from '../../libs/ui/organisms';
import { RoutingPath } from '../../routing';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  auctions: Auction[];
  auctionsLoading: boolean;
  auctionsError: boolean;
  categories: Category[];
  categoriesLoading: boolean;
  categoriesError: boolean;
  selectedCategory: ISelectItemProps;
  onCategoryChange: (selectedCategory: ISelectItemProps) => void;
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
    selectedCategory,
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
          selectedCategoryID={selectedCategory.value}
          onCategoryChange={onCategoryChange}
          sortBy={sortBy}
          onSortByChange={onSortByChange}
          sortDir={sortDir}
          onSortDirChange={onSortDirChange}
        />
      )}
      <ScrollView>
        {auctionsError && <Text>Error while loading auctions</Text>}

        {!auctionsLoading && !auctionsError && (
          <StyledView>
            <AuctionsList
              auctions={auctions}
              favoriteAuctionsIds={favoriteAuctionsIds}
              onFavoriteChange={onFavoriteChange}
              linkPatternWithId={RoutingPath.auction}
            />
          </StyledView>
        )}
      </ScrollView>
    </View>
  );
}
const StyledView = styled(View)`
  padding-bottom: 50px;
`;

export default AuctionsTemplate;
