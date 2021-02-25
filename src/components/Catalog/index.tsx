import React, { useState, useEffect } from 'react';
import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';

import { Container, Card } from './styles';

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
        <Card key={product.id}>
          <img src={product.image_url} alt="product" />
          <strong className="title">{product.title}</strong>
          <strong className="price">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </strong>
          <button type="button">Comprar</button>
        </Card>
      ))}
    </Container>
  );
};

export default Catalog;
