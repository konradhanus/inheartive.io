import { SortDirection } from './sort-direction';
import { SortKey } from './sort-key';

export interface SortOption {
  key: SortKey;
  label: string;
  direction: SortDirection;
}

export const sortOptions: SortOption[] = [
  {
    key: SortKey.ExpiresAt,
    label: 'Expire soon',
    direction: SortDirection.ASC,
  },
  {
    key: SortKey.CreatedAt,
    label: 'Newest',
    direction: SortDirection.DESC,
  },
  {
    key: SortKey.CreatedAt,
    label: 'Oldest',
    direction: SortDirection.ASC,
  },
  {
    key: SortKey.Price,
    label: 'Lowest price',
    direction: SortDirection.ASC,
  },
  {
    key: SortKey.Price,
    label: 'Highest price',
    direction: SortDirection.DESC,
  },
  {
    key: SortKey.Title,
    label: 'Title',
    direction: SortDirection.ASC,
  },
];
