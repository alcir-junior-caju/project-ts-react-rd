import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-top: 10px;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FirstCol = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 70%;

  & > div {
    &:nth-child(1) {
      @media (min-width: 320px) and (max-width: 768px) {
        order: 2;
        margin: 10px 0;
      }
    }

    &:nth-child(2) {
      img {
        padding-left: 10px;

        @media (min-width: 320px) and (max-width: 768px) {
          height: 30px;
        }
      }

      @media (min-width: 320px) and (max-width: 768px) {
        order: 1;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const LastCol = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 30%;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;
