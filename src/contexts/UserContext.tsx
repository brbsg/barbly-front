import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

type UserContextType = {
  userData: { name: string; token: string };
  setUserData: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
