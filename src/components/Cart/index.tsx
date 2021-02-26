import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { Container } from './styles';

const Cart: React.FC = () => {
  const items = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <Container>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TV 4k</td>
          <td>R$ 900,00</td>
          <td>1</td>
          <td>R$ 900,00</td>
        </tr>
        {items.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.product.price)}
            </td>
            <td>{item.quantity}</td>
            <td>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.quantity * item.product.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Cart;
