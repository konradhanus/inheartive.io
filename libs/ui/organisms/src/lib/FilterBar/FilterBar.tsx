import React from 'react';
import { Column } from '@inheartive/ui/atoms';
import { ICategory, SortDirection, SortKey } from '@inheartive/data';
import { CategoryFilter, mapCategoriesToSelect, Sort } from '@inheartive/ui/molecules';

interface Props {
  categories: ICategory[];
  selectedCategoryID: string;
  onCategoryChange: (id: string) => void;
  sortBy: SortKey;
  onSortByChange: (sortBy: SortKey) => void;
  sortDir: SortDirection;
  onSortDirChange: (sortDir: SortDirection) => void;
}

function FilterBar(props: Props) {
  const { onSortByChange, onSortDirChange, sortBy, sortDir, categories, selectedCategoryID, onCategoryChange } = props;

  return (
    <Column>
      <CategoryFilter
        items={mapCategoriesToSelect(categories)}
        selectedValue={selectedCategoryID}
        onChange={onCategoryChange}
      />

      <Sort sortBy={sortBy} onSortByChange={onSortByChange} sortDir={sortDir} onSortDirChange={onSortDirChange} />
    </Column>
  );
}

export { FilterBar };
