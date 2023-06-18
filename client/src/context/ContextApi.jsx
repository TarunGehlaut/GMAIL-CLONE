import { createContext, useState } from "react";

export const Context = createContext();

export function AppContext({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);

  return (
    <Context.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        results,
        setResults,
        refreshScreen,
        setRefreshScreen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
