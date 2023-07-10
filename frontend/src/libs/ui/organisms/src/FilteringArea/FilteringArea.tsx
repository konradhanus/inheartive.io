import React from 'react';
import { Category, SortDirection, SortKey } from '../../../../data';
import {
    CategoryFilter,
    mapCategoriesToSelect,
    Sort,
} from '../../../molecules';
import { HStack } from 'native-base';
import { ISelectItemProps } from '../../../atoms';

interface Props {
    categories: Category[];
    selectedCategoryID: string;
    onCategoryChange: (selectedCategory: ISelectItemProps) => void;
    sortBy: SortKey;
    onSortByChange: (sortBy: SortKey) => void;
    sortDir: SortDirection;
    onSortDirChange: (sortDir: SortDirection) => void;
}

function FilteringArea(props: Props) {
    const {
        onSortByChange,
        onSortDirChange,
        sortBy,
        sortDir,
        categories,
        selectedCategoryID,
        onCategoryChange,
    } = props;

    return (
        <HStack space={2} justifyContent='space-between'>
            <CategoryFilter
                items={mapCategoriesToSelect(categories)}
                selectedValue={selectedCategoryID}
                onChange={onCategoryChange}
            />
            <Sort
                sortBy={sortBy}
                onSortByChange={onSortByChange}
                sortDir={sortDir}
                onSortDirChange={onSortDirChange}
            />
        </HStack>
    );
}

export { FilteringArea };
