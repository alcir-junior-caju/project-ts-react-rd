import React, { createContext, useState, useContext } from 'react';

interface ScrollDownContextData {
  isActive: boolean;
  setIsActive(active: boolean): void;
}

const ScrollDownContext = createContext<ScrollDownContextData>(
  {} as ScrollDownContextData
);

export const ScrollDownProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ScrollDownContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ScrollDownContext.Provider>
  );
};

export const useScrollDown = (): ScrollDownContextData => {
  const context = useContext(ScrollDownContext);

  return context;
};
