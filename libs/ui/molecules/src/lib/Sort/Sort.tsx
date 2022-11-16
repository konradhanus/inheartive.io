import React from 'react';
import { Column, Icon, IconType, Pressable, Row, Select, Text } from '@inheartive/ui/atoms';
import { SortDirection, SortKey, sortOptions } from '@inheartive/data';

interface ISortProps {
  onSortByChange?: (sortBy: SortKey) => void;
  onSortDirChange?: (sortDir: SortDirection) => void;
  sortBy: SortKey;
  sortDir: SortDirection;
}

function Sort(props: ISortProps) {
  const { onSortByChange, onSortDirChange, sortBy, sortDir } = props;

  return (
    <Column>
      <Row display={'flex'} alignItems={'center'}>
        <Text width={70}>Sort by:</Text>
        <Select
          borderColor={'transparent'}
          selectedValue={sortBy}
          width={170}
          accessibilityLabel='Sort by'
          color='black'
          size={16}
          display='flex'
          flexGrow={1}
          onValueChange={(val) => onSortByChange && onSortByChange(val as SortKey)}
        >
          {sortOptions.map((option) => (
            <Select.Item key={option.key} label={option.label} value={option.key} />
          ))}
        </Select>
        {sortDir === SortDirection.ASC ? (
          <Pressable p={1} onPress={() => onSortDirChange && onSortDirChange(SortDirection.DESC)}>
            <Icon name={IconType.arrowUp} />
          </Pressable>
        ) : (
          <Pressable p={1} onPress={() => onSortDirChange && onSortDirChange(SortDirection.ASC)}>
            <Icon name={IconType.arrowDown} />
          </Pressable>
        )}
      </Row>
    </Column>
  );
}

export { Sort };
