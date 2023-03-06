import { Input, IInputProps } from 'native-base';
import React from 'react';
import { safeIntParse } from 'libs/ui/shared/utils';

type Props = {
  value: string | number;
  placeholder: string;
  onChange: (arg0: number) => void;
};

const NumberInput = (props: Props) => {
  const { value, placeholder, onChange } = props;

  return (
    <Input
      keyboardType='numeric'
      value={`${value}`}
      placeholder={placeholder}
      onChangeText={(value) => onChange(safeIntParse(value))}
    />
  );
};

export { NumberInput };
