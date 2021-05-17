import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid ${transparentize(0.7, '#ccc')};
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuLink = styled.li`
  padding-left: 10px;

  & > a {
    color: var(--primary);
    letter-spacing: -2px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {
      color: var(--primary);
      opacity: 0.6;
    }
  }
`;
