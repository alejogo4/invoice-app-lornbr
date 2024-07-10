import {createReducer} from '@reduxjs/toolkit';
import {
  IProduct,
  addProduct,
  removeProduct,
} from '../actions/shoppingcartActions';

export interface IShoppingcartState {
  products: IProduct[];
  totalProductos: number;
}

const initialState: IShoppingcartState = {
  products: [],
  totalProductos: 0,
};

const shoppingCartReducer = createReducer(initialState, builder => {
  builder
    .addCase(addProduct, (state, action) => {
      state.products = [...state.products, action.payload];
      state.totalProductos += 1;
    })
    .addCase(removeProduct, (state, action) => {
      let products = [...state.products].filter((_, i) => i !== action.payload);
      state.products = products;
      state.totalProductos = products.length;
    });
});

export default shoppingCartReducer;
