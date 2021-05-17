import React from 'react';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>
        Lorem ipsum dolor
        <span> sit </span>
        amet,
        <span> CONSECTUR </span>
        adipiscing elit. Donec accumsan
        <span> auctor </span>
      </h1>
      <h2>
        Vivamus nisi nibh, dignissim in nisi ac, dictum consequat dui. Quisque
        sit amet ipsum nisi. In placerat quam eros, sit amet pulvinar velit
        pharetra et.
      </h2>
    </Container>
  );
};

export default Main;
