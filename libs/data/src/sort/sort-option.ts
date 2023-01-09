import { SortKey } from './sort-key';

export interface SortOption {
  key: SortKey;
  label: string;
}

export const sortOptions: SortOption[] = [
  {
    key: SortKey.CreatedAt,
    label: 'Created date',
  },
  {
    key: SortKey.ExpiresAt,
    label: 'Expiry date',
  },
  {
    key: SortKey.Price,
    label: 'Heartcoins',
  },
  {
    key: SortKey.Title,
    label: 'Title',
  },
];
