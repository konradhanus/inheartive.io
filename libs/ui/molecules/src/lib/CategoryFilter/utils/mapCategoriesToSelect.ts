import { ISelectItemProps } from 'native-base';
import { ICategory } from '@inheartive/data';

export const mapCategoriesToSelect = (categories: ICategory[]): ISelectItemProps[] => {
  const items: ISelectItemProps[] = categories.map((category) => {
    return { value: category.id, label: category.name };
  });

  return [
    {
      value: '',
      label: 'All',
    },
    ...items,
  ];
};
