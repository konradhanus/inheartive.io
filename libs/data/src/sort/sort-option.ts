import { SortKey } from './sort-key';

export interface SortOption {
  key: SortKey;
  label: string;
}

export const sortOptions: SortOption[] = [
  {
    key: SortKey.CreatedDate,
    label: 'Created date',
  },
  {
    key: SortKey.ExpirationDate,
    label: 'Expiry date',
  },
  {
    key: SortKey.Heartcoins,
    label: 'Heartcoins',
  },
  {
    key: SortKey.Title,
    label: 'Title',
  },
];
