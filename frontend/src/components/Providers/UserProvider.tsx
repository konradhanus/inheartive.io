import { User } from '../../libs/data';
import { useState, ReactNode, useContext } from 'react';

import { createContext } from 'react';

interface UserContext {
  setUser: (user: User | null) => void;
  user: User | null;
}
export const UserContext = createContext<UserContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: (user: User | null) => {},
  user: null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
