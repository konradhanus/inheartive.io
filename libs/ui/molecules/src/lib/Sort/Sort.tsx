import React from 'react';
import { Column, Icon, IconType, Pressable, Row, Text } from '@inheartive/ui/atoms';
import { SortDirection, SortKey, sortOptions } from '@inheartive/data';
import { Actionsheet, Center, useDisclose } from 'native-base';
import { theme } from '@inheartive/ui/theme';

interface ISortProps {
  onSortByChange?: (sortBy: SortKey) => void;
  onSortDirChange?: (sortDir: SortDirection) => void;
  sortBy: SortKey;
  sortDir: SortDirection;
}

function Sort(props: ISortProps) {
  const { onSortByChange, onSortDirChange, sortBy, sortDir } = props;
  const { isOpen, onOpen, onClose } = useDisclose();

  const SortButton = (props: { onOpen: () => void }) => {
    const onOpen: () => void = props.onOpen;

    const sortChange = () => {
      if (sortDir === SortDirection.ASC) {
        onSortDirChange && onSortDirChange(SortDirection.DESC);
        onOpen();
      } else {
        onSortDirChange && onSortDirChange(SortDirection.ASC);
        onOpen();
      }
    };

    const ButtonText = () => {
      return (
        <Text
          fontSize='lg'
          _light={{
            color: theme.colors.trueGray['600'],
          }}
        >
          Sort
        </Text>
      );
    };

    return (
      <Pressable onPress={sortChange}>
        <Row space={3} alignItems='center'>
          <ButtonText />
          <Icon name={IconType.chevronDown} size={25} color={theme.colors.trueGray['500']} />
        </Row>
      </Pressable>
    );
  };

  return (
    <Column>
      <Row display={'flex'} alignItems={'center'} mr={3} mt={2}>
        <Center>
          <SortButton onOpen={onOpen} />
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              {sortOptions.map((option) => (
                <Actionsheet.Item
                  key={option.key}
                  onPressIn={() => {
                    onSortByChange && onSortByChange(option.key as SortKey);
                  }}
                >
                  {option.label}
                </Actionsheet.Item>
              ))}
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
      </Row>
    </Column>
  );
}

export { Sort };
