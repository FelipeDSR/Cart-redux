import styled from 'styled-components';

export const Container = styled.main`
  margin: 50px auto;
  width: 630px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-gap: 15px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.2);

  img {
    width: 80px;
    height: 80px;
  }

  strong {
    margin-top: 10px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    padding: 5px 10px;
    margin-top: 10px;
  }
`;
