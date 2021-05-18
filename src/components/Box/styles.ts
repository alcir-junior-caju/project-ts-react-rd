import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.aside<ContainerProps>`
  background: var(--commonWhite);
  color: var(--text);
  display: flex;
  flex-direction: column;

  & > div {
    &:nth-child(1) {
      background: ${({ color }) => `var(--${color})`};
      color: var(--commonWhite);
      display: flex;
      flex-direction: column;
      padding: 20px;
      place-items: center;
      width: 100%;

      & > h3 {
        font-size: 1.4rem;
        margin-top: 20px;
      }
    }

    &:nth-child(2) {
      padding: 10px;
      text-align: justify;

      & > strong {
        font-weight: 800;
      }
    }

    &:nth-child(3) {
      margin-bottom: 12px;
      padding: 10px;
      text-align: right;

      & > button {
        background: ${({ color }) => `var(--${color})`};
        border: none;
        color: var(--commonWhite);
        padding: 5px 8px;
        transition: 0.3s;

        &:hover {
          background: ${({ color }) => `var(--${color})`};
          opacity: 0.6;
        }
      }
    }
  }
`;
