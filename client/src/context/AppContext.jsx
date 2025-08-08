import { createContext, useMemo, useContext } from 'react';
export const AppContext = createContext({
  appName: 'My App',
});

export function AppProvider({ children }) {


  const appName = 'SaraBooks';


  const value = useMemo(
    () => ({
      appName
    }),
    []
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
