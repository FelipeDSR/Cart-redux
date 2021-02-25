import { all, takeLatest } from 'redux-saga/effects';

function checkProductInStock() {
  console.log('adicionou ao carrinho');
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductInStock)]);
