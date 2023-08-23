import React, { forwardRef, memo } from 'react';
import type { ISelectItemProps } from 'native-base';
import { Platform } from 'react-native';
import { Actionsheet } from 'native-base';
import { SelectContext } from './Select.android';

export const Item = (
  { isDisabled, label, value, ...props }: ISelectItemProps,
  ref?: any,
) => {
  const { onValueChange, selectedValue, _selectedItem, _item } =
    React.useContext(SelectContext);
  if (Platform.OS !== 'web') {
    const isSelected = selectedValue === value;

    return (
      <Actionsheet.Item
        ref={ref}
        onPress={() => {
          if (!isDisabled) {
            onValueChange(value);
          }
        }}
        accessibilityState={{ selected: isSelected }}
        {..._item}
        {...(isSelected && _selectedItem)}
        {...props}
      >
        {label}
      </Actionsheet.Item>
    );
  } else {
    return (
      <option value={value} disabled={isDisabled}>
        {label}
      </option>
    );
  }
};

export default memo(forwardRef(Item));
