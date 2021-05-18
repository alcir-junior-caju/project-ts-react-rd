import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 1024px) {
    grid-template-columns: auto;
  }
`;
