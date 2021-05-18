import styled from 'styled-components';

export const Container = styled.aside`
  background: var(--commonWhite);
  color: var(--text);
  display: flex;
  flex-direction: column;

  & > div {
    &:nth-child(1) {
      align-items: center;
      background: var(--auxiliary1);
      display: flex;
      justify-content: center;
      padding: 20px;
      width: 100%;
      color: var(--commonWhite);
    }

    &:nth-child(2) {
      padding: 10px;
      text-align: justify;

      & > strong {
        font-weight: 800;
      }
    }

    &:nth-child(3) {
      padding: 10px;
      text-align: right;

      & > span {
        background: var(--auxiliary1);
        color: var(--commonWhite);
        cursor: pointer;
        padding: 5px 8px;
      }
    }
  }
`;
