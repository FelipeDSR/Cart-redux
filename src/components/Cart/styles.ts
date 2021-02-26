import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.2);
  width: 315px;
  overflow-x: scroll;

  @media screen and (min-width: 768px) {
    width: 570px;
    grid-template-columns: 175px 175px 175px;
    grid-gap: 15px;
  }

  @media screen and (min-width: 992px) {
    width: 705px;
  }

  @media screen and (min-width: 1200px) {
    width: 795px;
    overflow-x: unset;
  }

  table {
    border-spacing: 0;
    width: 100%;
  }

  th,
  td {
    padding: 8px;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
