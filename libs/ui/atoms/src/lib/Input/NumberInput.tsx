import { Input } from 'native-base';
import React from 'react';

const NumberInput = (props: Props) => {
  const { value, placeholder } = props;
  return <Input keyboardType='numeric' value={`${value}`} placeholder={placeholder} />;
};

export { NumberInput };
