import React from 'react';
import { Row, ISelectItemProps, Text, Pressable, Icon, IconType } from '@inheartive/ui/atoms';
import { theme } from '@inheartive/ui/theme';
import { Actionsheet, useDisclose } from 'native-base';

interface Props {
  items: ISelectItemProps[];
  onChange: (itemValue: ISelectItemProps) => void;
  selectedValue: ISelectItemProps;
}

const ButtonText = () => (
  <Text fontSize='lg' color={theme.colors.trueGray['600']}>
    Filter
  </Text>
);

interface CategoryFilterButtonProps {
  onOpen: () => void;
}

const CategoryFilterButton = ({ onOpen }: CategoryFilterButtonProps) => (
  <Pressable onPress={onOpen}>
    <Row space={3} alignItems='center'>
      <ButtonText />
      <Icon name={IconType.chevronDown} size={25} color={theme.colors.trueGray['500']} />
    </Row>
  </Pressable>
);

function CategoryFilter(props: Props) {
  const { onChange, selectedValue, items } = props;
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Row display={'flex'} alignItems={'center'} ml={3} mt={2} mb={2}>
      <CategoryFilterButton onOpen={onOpen} />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item isDisabled>Show</Actionsheet.Item>
          {items.map((category) => (
            <Actionsheet.Item
              key={category.value}
              onPressIn={() => {
                onChange(category);
                onClose();
              }}
            >
              {category.value === selectedValue.value ? (
                <Text underline>{category.label}</Text>
              ) : (
                <Text>{category.label}</Text>
              )}
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Row>
  );
}

export { CategoryFilter };
