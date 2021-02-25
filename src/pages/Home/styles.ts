import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main + main {
    margin-top: 40px;
  }
`;
