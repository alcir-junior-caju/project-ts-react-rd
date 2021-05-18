import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  -moz-transition: opacity 100ms ease-in;
  -webkit-transition: opacity 100ms ease-in;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 100ms ease-in;
  width: 100%;
`;

export const ModalContent = styled.div`
  background: var(--commonWhite);
  width: 60%;

  & > div {
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      border-bottom: 2px solid ${transparentize(0.7, '#ccc')};

      & > span {
        font-weight: 800;
        text-transform: uppercase;
      }

      & > button {
        border: none;
        background: var(--primary);
        color: var(--commonWhite);
        padding: 8px 16px;
        transition: 0.3s;

        &:hover {
          background: var(--primary);
          opacity: 0.6;
        }
      }
    }

    &:nth-child(2) {
      padding: 20px 36px;
      text-align: justify;
    }
  }
`;
