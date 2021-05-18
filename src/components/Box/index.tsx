import React from 'react';

import { Container } from './styles';

interface BoxProps {
  color: string;
  image: string;
  imageLabel: string;
  description: string;
  buttonLabel: string;
  buttonAction: Function;
}

const Box: React.FC<BoxProps> = ({
  color,
  image,
  imageLabel,
  description,
  buttonLabel,
  buttonAction
}) => {
  return (
    <Container color={color}>
      <div>
        <img src={image} alt={imageLabel} />
        <h3>{imageLabel}</h3>
      </div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div>
        <button type="button" onClick={() => buttonAction()}>
          {buttonLabel}
        </button>
      </div>
    </Container>
  );
};

export default Box;
