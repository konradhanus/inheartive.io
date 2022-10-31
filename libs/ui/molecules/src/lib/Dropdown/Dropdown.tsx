/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Select, Row, Avatar } from '@inheartive/ui/atoms';

export interface IDropdownItem {
  id: string | number;
  name: string;
  route: string;
}
export interface IDropdownProps {
  dropdownList: IDropdownItem[];
  selectedValue?: string;
  onChange?: (itemValue: string) => void;
}

const Dropdown = ({ dropdownList, selectedValue, onChange }: IDropdownProps) => {
  return (
    <Row display={'flex'} alignItems={'center'}>
      <Select
        color='black'
        size={16}
        display='flex'
        flexGrow={1}
        width={170}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => onChange && onChange(itemValue)}
      >
        {dropdownList.map((item: IDropdownItem, index) => (
          <Select.Item key={index} label={item.name} value={item.route} />
        ))}
      </Select>
    </Row>
  );
};

export default Dropdown;
