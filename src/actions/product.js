import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from '../utils/store';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});
