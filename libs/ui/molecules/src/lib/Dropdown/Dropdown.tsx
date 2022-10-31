/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Box, HStack, Text } from '@inheartive/ui/atoms';
import { type } from 'node:os';

export interface IDropdownItem {
  name: string;
  route: string;
}
export type IDropdownList = IDropdownItem[];

const Dropdown = (dropdownList: IDropdownList) => {
  console.log(dropdownList);
  return (
    <HStack w={'100%'}>
      {dropdownList.map((item: IDropdownItem) => (
        <Text>{item.name}</Text>
      ))}
    </HStack>
  );
};

export default Dropdown;
