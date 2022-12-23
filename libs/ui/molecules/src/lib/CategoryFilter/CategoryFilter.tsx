import React from 'react';
import { Row, ISelectItemProps, Text, Pressable, Icon, IconType } from '@inheartive/ui/atoms';
import { theme } from '@inheartive/ui/theme';
import { Actionsheet, useDisclose } from 'native-base';

interface ICategoryFilterProps {
  items: ISelectItemProps[];
  onChange?: (itemValue: string) => void;
  selectedValue?: string;
}

function CategoryFilter(props: ICategoryFilterProps) {
  const { onChange, selectedValue, items } = props;
  const { isOpen, onOpen, onClose } = useDisclose();

  const CategoryFilterButton = (props: { onOpen: () => void }) => {
    const onOpen: () => void = props.onOpen;

    const ButtonText = () => {
      return (
        <Text fontSize='lg' color={theme.colors.trueGray['600']}>
          Filter
        </Text>
      );
    };

    return (
      <Pressable onPress={onOpen}>
        <Row space={3} alignItems='center'>
          <ButtonText />
          <Icon name={IconType.chevronDown} size={25} color={theme.colors.trueGray['500']} />
        </Row>
      </Pressable>
    );
  };

  return (
    <Row display={'flex'} alignItems={'center'} ml={3} mt={2} mb={2}>
      <CategoryFilterButton onOpen={onOpen} />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {items.map((category) => (
            <Actionsheet.Item
              key={category.value}
              onPressIn={() => {
                onChange && onChange(category.value);
              }}
            >
              {category.label}
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Row>
  );
}

export { CategoryFilter };
