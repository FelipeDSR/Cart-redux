import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const store = useSelector(state => state);

  console.log(store);

  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default Cart;
