/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Box, HStack, Text } from '@inheartive/ui/atoms';

export interface IDropdownItem {
  name: string;
  route: string;
}
export interface IDropdownList {
  dropdownList: IDropdownItem[];
}

const Dropdown = ({ dropdownList }: IDropdownList) => {
  return (
    <HStack w={'100%'}>
      {dropdownList.map((item: IDropdownItem) => (
        <Text>{item.name}</Text>
      ))}
    </HStack>
  );
};

export default Dropdown;
