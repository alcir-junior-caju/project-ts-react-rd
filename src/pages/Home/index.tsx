import React from 'react';

import { useModal } from '@hooks/modal';
import { useScrollDown } from '@hooks/scrollDown';
import { useTheme } from '@hooks/theme';

import { Box, Footer, Header, Main, Modal, ScrollDown } from '@components';

import desktopImage from '@assets/desktop.png';
import mobileImage from '@assets/mobile.png';
import tabletImage from '@assets/tablet.png';

import { Container } from './styles';

const SCROLL_DOWN = `
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
`;

const MODAL = {
  title: 'Title Modal Component',
  body: `
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
  `
};

const Home: React.FC = () => {
  const { isScrollDown, setIsScrollDown } = useScrollDown();
  const { isModal, setIsModal } = useModal();
  const { theme, setTheme } = useTheme();
  console.log(theme);

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
      buttonAction: () => setIsScrollDown(true)
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
      buttonAction: () => setIsModal(true)
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
      buttonLabel: theme === 'light' ? 'Alterar tema' : 'Voltar tema',
      buttonAction: () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }
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

      {isScrollDown && <ScrollDown body={SCROLL_DOWN} />}
      {isModal && <Modal title={MODAL.title} body={MODAL.body} />}

      <Footer />
    </>
  );
};

export default Home;
