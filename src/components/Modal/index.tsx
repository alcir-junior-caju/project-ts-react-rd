import React from 'react';

import { useModal } from '@hooks/modal';

import { Container, ModalContent } from './styles';

const Modal: React.FC = () => {
  const { setIsModal } = useModal();

  return (
    <Container>
      <ModalContent>
        <div>
          <span>Title Modal</span>
          <button type="button" onClick={() => setIsModal(false)}>
            Fechar
          </button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            cursus ultrices mauris, vitae rutrum libero ultrices nec. Nam
            condimentum rutrum lacus, et egestas metus gravida ac. Vivamus
            ornare quam elit, sed lobortis ante auctor at. Aenean augue dui,
            dignissim vitae pharetra nec, auctor tristique metus. Aliquam auctor
            justo turpis, et pulvinar nulla feugiat vel.
          </p>
          <p>
            In dapibus purus libero, sed ultrices velit lobortis sit amet.
            Praesent euismod enim vulputate enim pharetra, non feugiat tellus
            efficitur. Nulla ac congue mauris. Maecenas iaculis sollicitudin
            pharetra. Sed posuere orci id mollis eleifend. Nunc vitae sodales
            turpis. Duis vehicula magna sed consectetur imperdiet. Duis non nisl
            ligula.
          </p>
        </div>
      </ModalContent>
    </Container>
  );
};

export default Modal;
