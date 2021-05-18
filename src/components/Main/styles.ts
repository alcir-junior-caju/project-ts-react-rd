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

    & > span {
      font-weight: 800;
    }
  }

  & > h2 {
    padding: 36px 86px;
    text-align: center;
  }
`;
