import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FirstCol = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 70%;

  & > div {
    &:nth-child(2) {
      img {
        padding-left: 10px;
      }
    }
  }
`;

export const LastCol = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;
