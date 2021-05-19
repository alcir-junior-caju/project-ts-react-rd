import React, { useCallback, useEffect } from 'react';

import { useScrollDown } from '@hooks/scrollDown';

import { Container } from './styles';

interface ScrollDownProps {
  body: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ body }) => {
  const { setIsScrollDown } = useScrollDown();

  const handleCloseScrollDown = useCallback(() => {
    window.scroll({
      top: document.body.scrollTop,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsScrollDown(false);
    }, 500);
  }, [setIsScrollDown]);

  useEffect(() => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Container>
      <div>
        <button type="button" onClick={handleCloseScrollDown}>
          Fechar
        </button>
      </div>

      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Container>
  );
};

export default ScrollDown;
