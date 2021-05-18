import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 94px;

  & > h1 {
    color: var(--primary);
    font-size: 2.8rem;
    padding-top: 16px;
    text-align: center;
    line-height: 38px;

    @media (min-width: 320px) and (max-width: 768px) {
      line-height: 48px;
    }

    & > span {
      font-weight: 800;
    }
  }

  & > h2 {
    padding: 36px 86px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 768px) {
      padding: 0;
      margin: 28px 0;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 0;
  }
`;
