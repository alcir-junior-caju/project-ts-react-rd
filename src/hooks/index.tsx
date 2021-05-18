import React from 'react';

import { ModalProvider } from './modal';
import { ScrollDownProvider } from './scrollDown';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <ScrollDownProvider>
        <ModalProvider>{children}</ModalProvider>
      </ScrollDownProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
