import React from 'react';

import Logo4Bio from '@assets/4bio.png';
import LogoDrogaRaia from '@assets/drogaraia.png';
import LogoDrogasil from '@assets/drogasil.png';
import LogoFarmasil from '@assets/farmasil.png';
import LogoFooter from '@assets/rd-small.png';
import LogoUnievrs from '@assets/univers.png';

import { Container, FirstCol, LastCol } from './styles';

const COPY = 'RD 2017 - Todos os direitos reservados';
const LOGOS = [
  {
    label: 'DrogaRaia',
    logo: LogoDrogaRaia
  },
  {
    label: 'Drogasil',
    logo: LogoDrogasil
  },
  {
    label: 'Farmasil',
    logo: LogoFarmasil
  },
  {
    label: 'Univers',
    logo: LogoUnievrs
  },
  {
    label: '4Bio',
    logo: Logo4Bio
  }
];

const Footer: React.FC = () => {
  return (
    <Container>
      <FirstCol>
        <div>{COPY}</div>
        <div>
          {LOGOS.map(({ label, logo }) => (
            <img key={label} src={logo} alt={label} />
          ))}
        </div>
      </FirstCol>
      <LastCol>
        <img src={LogoFooter} alt={process.env.REACT_APP_TITLE} />
      </LastCol>
    </Container>
  );
};

export default Footer;
