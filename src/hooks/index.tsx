import React from 'react';

import { ModalProvider } from './modal';
import { ScrollDownProvider } from './scrollDown';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ScrollDownProvider>
      <ModalProvider>{children}</ModalProvider>
    </ScrollDownProvider>
  );
};

export default AppProvider;
