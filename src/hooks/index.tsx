import React from 'react';

import { ScrollDownProvider } from './scrollDown';

const AppProvider: React.FC = ({ children }) => {
  return <ScrollDownProvider>{children}</ScrollDownProvider>;
};

export default AppProvider;
