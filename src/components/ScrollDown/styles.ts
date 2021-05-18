import styled from 'styled-components';

export const Container = styled.div`
  text-align: justify;
  & > div {
    display: flex;
    justify-content: flex-end;

    & > button {
      background: var(--primary);
      border: none;
      color: var(--commonWhite);
      margin-bottom: 10px;
      padding: 8px 16px;
      transition: 0.3s;

      &:hover {
        background: var(--primary);
        opacity: 0.6;
      }
    }
  }
`;
