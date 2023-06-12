import { Category } from './category';

const now = new Date();

export const categoriesMock: Category[] = [
  {
    id: 'food',
    name: 'Food',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'homemade',
    name: 'Homemade',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'learning',
    name: 'Learning',
    createdAt: now,
    updatedAt: now,
  },
];
