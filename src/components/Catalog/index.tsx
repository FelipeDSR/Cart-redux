import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCart } from '../../store/modules/cart/actions';

import api from '../../services/api';
import { Container, Card } from './styles';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

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
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </Card>
      ))}
    </Container>
  );
};

export default Catalog;
