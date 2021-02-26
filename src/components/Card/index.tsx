import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { Container } from './styles';

interface CardProps {
  product: IProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container>
      <img src={product.image_url} alt="product" />
      <strong className="title">{product.title}</strong>
      {hasFailedStockCheck ? (
        <strong className="out-of-stock">Sem estoque</strong>
      ) : (
        <strong className="price">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </strong>
      )}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </Container>
  );
};

export default Card;
