import React, { createContext, useState, useContext } from 'react';

interface ScrollDownContextData {
  isScrollDown: boolean;
  setIsScrollDown(active: boolean): void;
}

const ScrollDownContext = createContext<ScrollDownContextData>(
  {} as ScrollDownContextData
);

export const ScrollDownProvider: React.FC = ({ children }) => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  return (
    <ScrollDownContext.Provider value={{ isScrollDown, setIsScrollDown }}>
      {children}
    </ScrollDownContext.Provider>
  );
};

export const useScrollDown = (): ScrollDownContextData => {
  const context = useContext(ScrollDownContext);

  return context;
};
