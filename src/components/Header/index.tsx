import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@assets/rd.png';

import { Container, Menu, MenuLink } from './styles';

const LINKS = [
  {
    link: '#',
    label: 'HTML5'
  },
  {
    link: '#',
    label: 'CSS3'
  },
  {
    link: '#',
    label: 'JAVASCRIPT'
  },
  {
    link: '#',
    label: 'REACT'
  },
  {
    link: '#',
    label: 'REDUX'
  }
];

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt={process.env.REACT_APP_TITLE} />
      </Link>

      <Menu>
        {LINKS.map(({ link, label }) => (
          <MenuLink key={label}>
            <Link to={link}>{label}</Link>
          </MenuLink>
        ))}
      </Menu>
    </Container>
  );
};

export default Header;
