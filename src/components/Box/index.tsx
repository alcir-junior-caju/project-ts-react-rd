import React from 'react';

import { Container } from './styles';

const Box: React.FC = () => {
  return (
    <Container>
      <div>Image</div>
      <div>
        Aliquam a turpis dictum, dapibus dui convallis,
        <strong> consectetur </strong>
        lectus. Sed nec odio eu est aliquet ultrices nec a eros.
      </div>
      <div>
        <span>Leia mais...</span>
      </div>
    </Container>
  );
};

export default Box;
