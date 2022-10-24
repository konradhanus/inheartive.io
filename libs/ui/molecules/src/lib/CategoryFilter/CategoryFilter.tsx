import React from 'react';
import { Row, Select, ISelectItemProps, Text } from '@inheartive/ui/atoms';

interface ICategoryFilterProps {
  items: ISelectItemProps[];
  onChange?: (itemValue: string) => void;
  selectedValue?: string;
}

function CategoryFilter(props: ICategoryFilterProps) {
  const { onChange, selectedValue, items } = props;

  return (
    <Row display={'flex'} alignItems={'center'}>
      <Text>Category:</Text>
      <Select
        borderColor={'transparent'}
        selectedValue={selectedValue}
        width={130}
        accessibilityLabel='Category'
        color='black'
        size={16}
        display='flex'
        flexGrow={1}
        onValueChange={(itemValue) => onChange && onChange(itemValue)}
      >
        {items.map((category) => (
          <Select.Item key={category.value} label={category.label} value={category.value} />
        ))}
      </Select>
    </Row>
  );
}

export { CategoryFilter };
