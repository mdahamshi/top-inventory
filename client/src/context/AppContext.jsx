import { createContext, useMemo, useContext } from 'react';
import { useTheme } from '@sarawebs/sb-hooks';

export const AppContext = createContext({
  appName: 'My App',
});

export function AppProvider({ children }) {
  const { theme, toggleTheme } = useTheme();

  const appName = 'SaraBooks';

  const value = useMemo(
    () => ({
      appName,
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
