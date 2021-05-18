import React, { createContext, useState, useContext } from 'react';

interface ScrollDownContextData {
  isActive: {
    type: string;
    active: boolean;
  };
  setIsActive(active: Object): void;
}

const ScrollDownContext = createContext<ScrollDownContextData>(
  {} as ScrollDownContextData
);

export const ScrollDownProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState({
    type: '',
    active: false
  });

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
