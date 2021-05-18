import React from 'react';

import { useScrollDown } from '@hooks/scrollDown';

import { Box, Footer, Header, Main, ScrollDown } from '@components';

import desktopImage from '@assets/desktop.png';
import mobileImage from '@assets/mobile.png';
import tabletImage from '@assets/tablet.png';

import { Container } from './styles';

const Home: React.FC = () => {
  const { isActive, setIsActive } = useScrollDown();

  const BOXS = [
    {
      color: 'auxiliary1',
      image: desktopImage,
      imageLabel: 'Site Responsivo DESKTOP',
      description: `
      Aliquam a turpis dictum, dapibus dui convallis,
      <strong> consectetur </strong>
      lectus. Sed nec odio eu est aliquet ultrices nec a eros.
      `,
      buttonLabel: 'Leia mais...',
      buttonAction: () =>
        setIsActive({
          type: 'scroll',
          active: true
        })
    },
    {
      color: 'auxiliary2',
      image: tabletImage,
      imageLabel: 'Site Responsivo TABLET',
      description: `
      Aliquam a turpis dictum, dapibus dui convallis,
      <strong> consectetur </strong>
      lectus. Sed nec odio eu est aliquet ultrices nec a eros.
      `,
      buttonLabel: 'Leia mais...',
      buttonAction: () =>
        setIsActive({
          type: 'modal',
          active: true
        })
    },
    {
      color: 'auxiliary3',
      image: mobileImage,
      imageLabel: 'Site Responsivo MOBILE',
      description: `
      Aliquam a turpis dictum, dapibus dui convallis,
      <strong> consectetur </strong>
      lectus. Sed nec odio eu est aliquet ultrices nec a eros.
      `,
      buttonLabel: 'Alterar tema',
      buttonAction: () =>
        setIsActive({
          type: 'theme',
          active: true
        })
    }
  ];

  return (
    <>
      <Header />
      <Main />
      <Container>
        {BOXS.map(
          ({
            color,
            image,
            imageLabel,
            description,
            buttonLabel,
            buttonAction
          }) => (
            <Box
              key={imageLabel}
              color={color}
              image={image}
              imageLabel={imageLabel}
              description={description}
              buttonLabel={buttonLabel}
              buttonAction={buttonAction}
            />
          )
        )}
      </Container>

      {isActive.active && isActive.type === 'scroll' && <ScrollDown />}

      <Footer />
    </>
  );
};

export default Home;
