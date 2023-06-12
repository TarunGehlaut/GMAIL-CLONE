import { createContext, useState } from "react";

export const Context = createContext();

export function AppContext({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
