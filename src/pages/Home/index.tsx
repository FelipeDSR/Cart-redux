import React from 'react';

import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Catalog />
      <Cart />
    </Container>
  );
};

export default Home;
