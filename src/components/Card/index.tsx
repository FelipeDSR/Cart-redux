import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCart } from '../../store/modules/cart/actions';

import { Container } from './styles';

interface CardProps {
  product: IProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <Container>
      <img src={product.image_url} alt="product" />
      <strong className="title">{product.title}</strong>
      <strong className="price">
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price)}
      </strong>
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </Container>
  );
};

export default Card;
