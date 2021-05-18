import React from 'react';

import { Box, Footer, Header, Main } from '@components';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Container>
        <Box />
        <Box />
        <Box />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
