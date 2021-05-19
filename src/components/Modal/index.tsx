import React from 'react';

import { useModal } from '@hooks/modal';

import { Container, ModalContent } from './styles';

interface ModalProps {
  title: string;
  body: string;
}

const Modal: React.FC<ModalProps> = ({ title, body }) => {
  const { setIsModal } = useModal();

  return (
    <Container>
      <ModalContent>
        <div>
          <span>{title}</span>
          <button type="button" onClick={() => setIsModal(false)}>
            Fechar
          </button>
        </div>
        <div>
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </ModalContent>
    </Container>
  );
};

export default Modal;
