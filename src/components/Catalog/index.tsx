import React, { useState, useEffect } from 'react';
import { IProduct } from '../../store/modules/cart/types';

import api from '../../services/api';

import Card from '../Card';

import { Container } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <Container>
      {catalog.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Catalog;
