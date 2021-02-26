import React from 'react';

import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Catalogo de produtos</Title>
      <Catalog />
      <Title>Carrinho</Title>
      <Cart />
    </Container>
  );
};

export default Home;
