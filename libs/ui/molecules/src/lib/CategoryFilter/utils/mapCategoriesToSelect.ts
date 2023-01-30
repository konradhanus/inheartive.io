import { ISelectItemProps } from 'native-base';
import { Category } from '@inheartive/data';

export const mapCategoriesToSelect = (categories: Category[]): ISelectItemProps[] => {
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
