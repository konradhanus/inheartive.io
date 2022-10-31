/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Avatar, Row } from '@inheartive/ui/atoms';

interface IDropdownItem {
  name: string;
  route: string;
}
interface IAvatarDropdownList {
  dropdownList: IDropdownItem;
}

const AvatarDropdown = () => {
  return (
    <Row space={2} alignItems='center'>
      <Avatar></Avatar>
    </Row>
  );
};

export default AvatarDropdown;
