/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useCallback } from 'react';
import { Select, Box, Avatar } from '@inheartive/ui/atoms';
import { useNavigate } from 'react-router';

export interface DropdownItem {
  name: string;
  route?: string;
}
export interface DropdownProps {
  dropdownList: DropdownItem[];
  selectedValue?: string;
  background?: string;
  testID?: string;
}

const AvatarDropdown = ({ dropdownList, selectedValue, background, testID }: DropdownProps) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback((routeName: string) => navigate(routeName, { replace: true }), [navigate]);
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
        display='flex'
        flexGrow={1}
        selectedValue={selectedValue}
        dropdownIcon={avatar}
        padding='0'
        testID={testID}
      >
        {dropdownList.map((item: DropdownItem, index) => (
          <Select.Item onPress={() => handleOnClick(item.route)} key={index} label={item.name} value={item.route} />
        ))}
      </Select>
    </Box>
  );
};

export { AvatarDropdown };
