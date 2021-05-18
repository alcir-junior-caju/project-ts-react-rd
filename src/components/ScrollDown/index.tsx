import React, { useCallback } from 'react';

import { useScrollDown } from '@hooks/scrollDown';

import { Container } from './styles';

const ScrollDown: React.FC = () => {
  const { isActive, setIsActive } = useScrollDown();
  console.log(isActive);

  const handleCloseScrollDown = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  return (
    <Container>
      <button type="button" onClick={handleCloseScrollDown}>
        ScrollDown
      </button>
    </Container>
  );
};

export default ScrollDown;
