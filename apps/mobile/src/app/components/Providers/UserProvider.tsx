import { useState, ReactNode } from 'react';

import { createContext } from 'react';

export const UserContext = createContext({
  auth: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: (auth: boolean) => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(false);

  return (
    <UserContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
