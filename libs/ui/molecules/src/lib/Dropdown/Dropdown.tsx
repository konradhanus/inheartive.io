/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Select, Box, Avatar } from '@inheartive/ui/atoms';

export interface IDropdownItem {
  id: string | number;
  name: string;
  route: string;
}
export interface IDropdownProps {
  dropdownList: IDropdownItem[];
  selectedValue?: string;
  onChange?: (itemValue: string) => void;
  background?: string;
}

const Dropdown = ({ dropdownList, selectedValue, onChange, background }: IDropdownProps) => {
  const avatar = (
    <Avatar
      bg={background}
      alignSelf='center'
      size='xl'
      source={{
        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }}
    ></Avatar>
  );
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Select
        borderColor={'transparent'}
        color='black'
        size={50}
        display='flex'
        flexGrow={1}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onChange && onChange(itemValue)}
        dropdownIcon={avatar}
      >
        {dropdownList.map((item: IDropdownItem, index) => (
          <Select.Item key={index} label={item.name} value={item.route} />
        ))}
      </Select>
    </Box>
  );
};

export default Dropdown;