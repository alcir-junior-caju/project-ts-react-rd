import React, { createContext, useState, useContext } from 'react';

interface ThemeContextData {
  theme: string;
  setTheme(theme: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  if (theme === 'dark') {
    document.documentElement.style.setProperty('--primary', '#9c8cb9');
    document.documentElement.style.setProperty('--auxiliary1', '#fe9481');
    document.documentElement.style.setProperty('--auxiliary2', '#fe9481');
    document.documentElement.style.setProperty('--auxiliary3', '#fe9481');
    document.documentElement.style.setProperty('--text', '#9c8cb9');
    document.documentElement.style.setProperty('--background', '#fcda92');
  } else {
    document.documentElement.style.removeProperty('--primary');
    document.documentElement.style.removeProperty('--auxiliary1');
    document.documentElement.style.removeProperty('--auxiliary2');
    document.documentElement.style.removeProperty('--auxiliary3');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--background');
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  return context;
};
