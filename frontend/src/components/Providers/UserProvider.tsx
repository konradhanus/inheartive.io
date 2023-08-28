import { User } from '../../libs/data';
import { useState, ReactNode, useContext, useEffect } from 'react';

import { createContext } from 'react';
import { getValue, setValue } from '../../libs/ui/shared';
import { StorageKeys } from '../../libs/ui/shared/utils.types';

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

    useEffect(() => {
      if (user === null) return;
      setValue(StorageKeys.USER, user);
    }, [user]);

    useEffect(() => {
      const getUserData = async () => {
        const data = await getValue(StorageKeys.USER);
        if(!data) return;
        setUser(JSON.parse(data))
      }
      getUserData();
    }, []);

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
