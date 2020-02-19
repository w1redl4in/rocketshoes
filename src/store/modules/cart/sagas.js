import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  console.log(id);
  const response = yield call(API.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@@cart/ADD_REQUEST', addToCart)]);
