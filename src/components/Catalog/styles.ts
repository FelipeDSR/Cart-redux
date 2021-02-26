import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 150px 150px;
  grid-gap: 15px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 175px 175px 175px;
    grid-gap: 15px;
  }

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 15px;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 15px;
  }
`;
