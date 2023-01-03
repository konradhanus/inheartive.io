import { IUser } from './user';

export const usersMock: IUser[] = [
  {
    id: 'uuuu-1111',
    firstName: 'John',
    lastName: 'Doe',
    initials: 'JD',
    avatarSrc:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  { id: 'uuuu-2222', firstName: 'Jan', lastName: 'Kovalsky', initials: 'JK' },
  { id: 'uuuu-3333', firstName: 'My', lastName: 'Bro', initials: 'MB' },
];
