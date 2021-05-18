import React, { useCallback, useEffect } from 'react';

import { useScrollDown } from '@hooks/scrollDown';

import { Container } from './styles';

const ScrollDown: React.FC = () => {
  const { setIsActive } = useScrollDown();

  const handleCloseScrollDown = useCallback(() => {
    window.scroll({
      top: document.body.scrollTop,
      left: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsActive(false);
    }, 500);
  }, [setIsActive]);

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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        volutpat ex sit amet nibh cursus luctus. In facilisis risus eu pharetra
        luctus. Aenean id metus libero. Duis consectetur malesuada fringilla.
        Integer tincidunt leo et aliquam porttitor. Cras eu dolor sagittis,
        interdum nisl eget, fermentum sapien. Suspendisse nec tincidunt orci.
      </p>
      <p>
        Integer eu augue enim. Phasellus eleifend faucibus lectus at
        ullamcorper. Cras consectetur ex eu neque tempor, a convallis erat
        interdum. Etiam ante risus, dictum vitae rhoncus eget, congue lobortis
        leo. Etiam id ex a dolor maximus congue. Nam bibendum eros at lacus
        pellentesque, eu mollis erat aliquam.
      </p>
      <p>
        In sollicitudin faucibus pellentesque. Suspendisse egestas mollis
        sodales. Mauris at commodo tortor. Aenean elementum, ipsum id euismod
        posuere, mauris augue tempor sem, a viverra massa magna in dolor. Cras
        malesuada lobortis ex sed tincidunt. Quisque elit sem, scelerisque eget
        mi sit amet, mollis facilisis lectus. Suspendisse dictum eros et justo
        sodales scelerisque.
      </p>
    </Container>
  );
};

export default ScrollDown;
